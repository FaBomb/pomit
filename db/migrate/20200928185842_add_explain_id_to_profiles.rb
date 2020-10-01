class AddExplainIdToProfiles < ActiveRecord::Migration[6.0]
  def change
    add_column :profiles, :explain_id, :integer
  end
end
