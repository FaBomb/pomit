class AddUnivercityToProfiles < ActiveRecord::Migration[6.0]
  def change
    add_column :profiles, :univercity, :string
  end
end
