class Profile < ApplicationRecord
    mount_uploader :header_image, ImageUploader
    mount_uploader :icon, ImageUploader
    mount_uploader :folio_image, ImageUploader
    
    belongs_to :user
end
