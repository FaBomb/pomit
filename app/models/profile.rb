class Profile < ApplicationRecord
    mount_uploader :header_image, ImageUploader
    mount_uploader :icon, ImageUploader
    
    belongs_to :user
    
    has_many    :explains, inverse_of: :profile, dependent: :destroy
    accepts_nested_attributes_for :explains, reject_if: :all_blank, allow_destroy: true
end
