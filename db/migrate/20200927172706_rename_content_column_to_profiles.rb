class RenameContentColumnToProfiles < ActiveRecord::Migration[6.0]
  def change
    rename_column :profiles, :geader_image, :header_image
  end
end
