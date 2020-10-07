class RequestsController < ApplicationController
  def create
    request = current_user.requests.create!(article_id: params[:article_id], from_user_id: Article.find(params[:article_id]).user_id )
    
    redirect_back(fallback_location: root_path)
  end

  def new
    @request = Request.new(request_params)
  end

  def destroy
    request = Request.find_by(article_id: params[:article_id], user_id: current_user.id)
    request.destroy
    redirect_back(fallback_location: root_path)
  end

  private

  def request_params
    params.require(:request).permit(:message)
  end

end
