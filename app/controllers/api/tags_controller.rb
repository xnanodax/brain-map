class Api::TagsController < ApplicationController
  def index
    @tag = Tag.find_by(name: params[:tag][:name])
    # @tag = Tagging.all
  end

  def create
    @tag = Tag.new(tag_params)

    if @tag.save
      render :show
    else
      render json: @tag.errors.full_messages, status: 424
    end
  end

  def show
    @tag = Tag.find_by(id: params[:id])

    if @tag
      render :show
    else
      render json: ["tag does not exist, cannot show"], status: 424
    end
  end

  def destroy
    @tag = Tag.find_by(id: params[:id])
    
    if @tag.destroy
      render :delete
    else
      render json: ["tag does not exist, cannot delete"], status: 424
    end

  end

  def tag_params
    params.require(:tag).permit(:name)
  end
end
