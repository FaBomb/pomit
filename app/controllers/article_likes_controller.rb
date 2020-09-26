class ArticleLikesController < ApplicationController
    def create
        @article_like = current_user.article_likes.create(article_id: params[:article_id])
        redirect_back(fallback_location: root_path)
    end

    def destroy
        @article_like = ArticleLike.find_by(article_id: params[:article_id], user_id: current_user.id)
        @article_like.destroy
        redirect_back(fallback_location: root_path)
    end

end
