class ArticlesController < ApplicationController
  before_action :authenticate_user!
  
  def index
    @articles = Article.all.page(params[:page]).per(10)
  end

  def show
    @article = Article.find(params[:id])
    @article_like = ArticleLike.new
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
  end

  def create
    @article = Article.new(article_params)
    @article.user_id = current_user.id
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
