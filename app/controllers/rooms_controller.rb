class RoomsController < ApplicationController
  before_action :authenticate_user!

  def show
    @article = Article.find(params[:id])
    @room = @article.room
    @messages = @room.messages
  end

end
