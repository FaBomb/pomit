class ArticlesController < ApplicationController
  before_action :authenticate_user!
  
  def index
  end

  def show
  end

  def new
    @article = Article.new
  end

  def create
    @article = Article.new(article_params)
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
