class Room < ApplicationRecord
    has_many :messages, dependent: :destroy
    has_many :requests, dependent: :destroy
    belongs_to :article
end
