class Article < ApplicationRecord
    mount_uploader :image, ImageUploader

    belongs_to :user

    has_many :article_likes, dependent: :destroy
    has_many :article_liked_users, through: :article_likes, source: :user

    has_many :requests, dependent: :destroy
    has_many :requested_users, through: :requests, source: :user

    has_one :room, dependent: :destroy
    accepts_nested_attributes_for :room
end
