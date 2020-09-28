class CreateProfiles < ActiveRecord::Migration[6.0]
  def change
    create_table :profiles do |t|
      t.string :geader_image
      t.string :hobby
      t.string :my_special
      t.string :insta
      t.string :twitter
      t.string :facebook
      t.text :about
      t.string :specialty_title
      t.text :specialty_detail
      t.string :skill_title
      t.text :skill_detail
      t.string :qualification_title
      t.text :qualification_detail
      t.string :folio_image
      t.string :folio_title
      t.text :folio_detail
      t.integer :user_id

      t.timestamps
    end
  end
end
