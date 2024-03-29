class ArticlesController < ApplicationController
  before_action :authenticate_user!
  
  def index
    if params[:search] == nil
      @articles = Article.all.page(params[:page]).per(10)
    elsif params[:search] == ''
      @articles = Article.all.page(params[:page]).per(10)
    else
      @articles = Article.where("title LIKE ? ",'%' + params[:search] + '%').page(params[:page]).per(10)
                  .or(Article.where("content LIKE ? ",'%' + params[:search] + '%').page(params[:page]).per(10))
                  .or(Article.where("to_join LIKE ? ",'%' + params[:search] + '%').page(params[:page]).per(10))
                  .or(Article.where("skill LIKE ? ",'%' + params[:search] + '%').page(params[:page]).per(10))
                  .or(Article.where("category LIKE ? ",'%' + params[:search] + '%').page(params[:page]).per(10))
                  .or(Article.where(user_id: Profile.where("univercity LIKE ? ",'%' + params[:search] + '%')).page(params[:page]).per(10))
                  .or(Article.where(user_id: Profile.where("faculty LIKE ? ",'%' + params[:search] + '%')).page(params[:page]).per(10))
                  .or(Article.where(user_id: Profile.where("department LIKE ? ",'%' + params[:search] + '%')).page(params[:page]).per(10))
    end
  end

  def show
    @article = Article.find(params[:id])
    @article_like = ArticleLike.new
    @request = Request.new
    @request_user = Request.find_by(user_id: current_user.id, article_id: @article.id)
    @requested = Request.where(article_id: params[:id])
    @requested_user = User.where(id: @requested.pluck(:user_id))
  end

  def edit
    @article = Article.find(params[:id])
  end

  def update 
    @article= Article.find(params[:id])
    if @article.update(article_params)
      redirect_to :action => "show", :id => @article.id
    else
      redirect_to :action => "new"
    end
  end

  def destroy
    Article.find(params[:id]).destroy
    redirect_to action: :index
  end
  
  def new
    @article = Article.new
    @article.build_room
  end

  def create
    @article = Article.new(article_params)
    @article.user_id = current_user.id
    @article.build_room
    if @article.save
      redirect_to :action => "index"
    else
      redirect_to :action => "new"
    end
  end

  private

  def article_params
    params.require(:article).permit(:category, :title, :image ,:content, :to_join, :skill)
  end

end
