class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.integer :likes
      t.string :comment
      t.date :post_date
      t.belongs_to :post, foreign_key: true

      t.timestamps
    end
  end
end
