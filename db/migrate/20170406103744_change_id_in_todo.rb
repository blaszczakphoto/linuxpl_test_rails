class ChangeIdInTodo < ActiveRecord::Migration[5.0]
  def change
    change_table :todos do |t|
      t.change :id, :string
    end
  end
end
