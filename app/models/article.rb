class Article < ApplicationRecord
    mount_uploader :image, ImageUploader

    belongs_to :user

    has_many :article_likes, dependent: :destroy
    has_many :article_liked_users, through: :article_likes, source: :user

end
