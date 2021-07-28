class CreateJoinTableIngredientsRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :ingredients_recipes do |t|
      t.references :recipe, index: true, foreign_key: true, null: false
      t.references :ingredient, index: true, foreign_key: true, null: false
    end
  end
end
