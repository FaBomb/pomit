class Explain < ApplicationRecord
    mount_uploader :folio_image, ImageUploader
    belongs_to :profile
end
