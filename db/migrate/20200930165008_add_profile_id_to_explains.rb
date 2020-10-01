class AddProfileIdToExplains < ActiveRecord::Migration[6.0]
  def change
    add_column :explains, :profile_id, :integer
  end
end
