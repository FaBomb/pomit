class AddIconToProfiles < ActiveRecord::Migration[6.0]
  def change
    add_column :profiles, :icon, :string
  end
end
