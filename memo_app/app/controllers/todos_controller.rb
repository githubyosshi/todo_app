class TodosController < ApplicationController
  def index
    @todo = Todo.new
    @todos = Todo.order('created_at ASC')
  end

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      # redirect_to :root
      respond_to do |format|
      format.html { redirect_to :root }
      format.json { render json: @todo}
      end
    else
      # render :index, alert: 'Todoを入力してください'
      render :index
    end
  end

  private
  def todo_params
    params.require(:todo).permit(:content)
  end
end
