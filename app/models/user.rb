class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :articles, dependent: :destroy
  has_many :messages
  
  has_one :profile, dependent: :destroy


  has_many :article_likes, dependent: :destroy
  has_many :article_liked_articles, through: :article_likes, source: :article

  def already_liked?(article)
    self.article_likes.exists?(article_id: article.id)
  end

end
