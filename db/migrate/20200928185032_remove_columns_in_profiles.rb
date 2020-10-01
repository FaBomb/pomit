class RemoveColumnsInProfiles < ActiveRecord::Migration[6.0]
  def change
    remove_column :profiles, :specialty_title, :string
    remove_column :profiles, :specialty_detail, :text
    remove_column :profiles, :skill_title, :string
    remove_column :profiles, :skill_detail, :text
    remove_column :profiles, :qualification_title, :string
    remove_column :profiles, :qualification_detail, :text
    remove_column :profiles, :folio_image, :string
    remove_column :profiles, :folio_title, :string
    remove_column :profiles, :folio_detail, :string
        
  end
end
