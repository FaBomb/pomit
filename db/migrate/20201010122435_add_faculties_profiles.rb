class AddFacultiesProfiles < ActiveRecord::Migration[6.0]
  def change
    add_column :profiles, :faculty, :string

    add_column :profiles, :department, :string
  end
end
