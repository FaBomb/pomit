class RequestsController < ApplicationController
  def create
    @request= Request.new(request_params)
    @request.user_id = current_user.id
    @request.article_id = params[:article_id]
    @request.from_user_id = Article.find(params[:article_id]).user_id
    if @request.save
      redirect_back(fallback_location: root_path)
    else
      redirect_to :action => "new"
    end
  end

  def new 
    @request= Request.new
  end

  def update 
    @request = Request.find_by(article_id: params[:article_id],user_id: params[:id])
    @request.permission = true
    @request.update(update_request_params)
    redirect_back(fallback_location: root_path)
  end

  def destroy
    request = Request.find_by(article_id: params[:article_id], user_id: current_user.id)
    request.destroy
    redirect_back(fallback_location: root_path)
  end

  private

  def request_params
    params.require(:request).permit(:message, :permission)
  end
  def update_request_params
    params.permit(:message, :permission)
  end

end
