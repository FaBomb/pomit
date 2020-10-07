class AddMessagesToRequests < ActiveRecord::Migration[6.0]
  def change
    add_column :requests, :message, :string
    add_column :requests, :from_user_id, :integer
    add_column :requests, :permission, :boolean, default: false, null: false
  end
end
