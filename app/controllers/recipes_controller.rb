# frozen_string_literal: true

class RecipesController < ApplicationController
  DEFAULT_PER_PAGE = 10

  def index
    @recipes = Recipe.paginate(page: params[:page], per_page: per_page)
  end

  def show
    @recipe = Recipe.find(params[:id])
  end

  def new
    @recipe = Recipe.new
  end

  def edit
  end

  def create
    @recipe = Recipe.new(recipe_params)
    respond_to do |format|
      if @recipe.save
        format.html { redirect_to @recipe, notice: t(".notice") }
      else
        format.html { render :new, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @recipe.destroy
    respond_to do |format|
      format.html { redirect_to recipe_url, notice: t(".notice") }
    end
  end

  def update
    respond_to do |format|
      if @recipe.update(recipe_params)
        format.html { redirect_to @recipe, notice: t(".notice") }
      else
        format.html { render :edit, status: :unprocessable_entity }
      end
    end
  end

  private

  def recipe_params
    params.require(:recipe).permit(:title, :description)
  end

  def per_page
    params[:per_page].presence || DEFAULT_PER_PAGE
  end
end
