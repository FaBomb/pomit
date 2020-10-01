class CreateExplains < ActiveRecord::Migration[6.0]
  def change
    create_table :explains do |t|

      t.timestamps
    end
  end
end
