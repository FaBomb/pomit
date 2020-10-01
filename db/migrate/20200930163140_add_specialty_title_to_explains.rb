class AddSpecialtyTitleToExplains < ActiveRecord::Migration[6.0]
  def change
    add_column :explains, :specialty_title, :string
    add_column :explains, :specialty_detail, :text
    add_column :explains, :skill_title, :string
    add_column :explains, :skill_detail, :text
    add_column :explains, :qualification_title, :string
    add_column :explains, :qualification_detail, :text
    add_column :explains, :folio_image, :string
    add_column :explains, :folio_title, :string
    add_column :explains, :folio_detail, :text
    add_column :explains, :user_id, :integer
  end
end
