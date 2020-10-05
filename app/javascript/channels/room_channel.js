import consumer from "./consumer"

$(function() {
  const chatChannel = consumer.subscriptions.create({ channel: 'RoomChannel', room: $('#messages').data('room_id') }, {
    connected() {
      // Called when the subscription is ready for use on the server
    },

    disconnected() {
      // Called when the subscription has been terminated by the server
    },

    received: function(data) {
      $('#messages').append(data['message']);
      $("#messages").prop({ scrollTop: $("#messages").prop("scrollHeight") });
    },

    speak: function(message) {
      return this.perform('speak', {
        message: message
      });
    }
  });

  $(document).on('keypress', '[data-behavior~=room_speaker]', function(event) {
    if (event.keyCode === 13 && !event.shiftKey ) {
      chatChannel.speak(event.target.value);
      event.target.value = '';
      return event.preventDefault();
    }
  });
  $(".post_btn").on('click', function(event) {
    const content = $(".chat-input").val();
    chatChannel.speak(content);
    $(".chat-input").val("")
  });
});
