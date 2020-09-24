class CreateArticles < ActiveRecord::Migration[6.0]
  def change
    create_table :articles do |t|
      t.string :category
      t.string :title
      t.string :image
      t.text :content
      t.text :to_join
      t.text :skill

      t.timestamps
    end
  end
end
