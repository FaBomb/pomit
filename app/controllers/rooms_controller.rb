class RoomsController < ApplicationController
  before_action :authenticate_user!

  def show
    @article = Article.find(params[:id])
    @room = @article.room
    @messages = @room.messages
    @requested = Request.where(article_id: params[:id])
    @requested_user = User.where(id: @requested.pluck(:user_id))
  end

end
