class Api::TaggingsController < ApplicationController
  def index
    @taggings = Tagging.all
  end

  def create
    @tagging = Tagging.new(tagging_params)
    if @tagging.save
      render :show
    else
      render json: @tagging.errors.full_messages
    end
  end

  def show
    @tagging = Tagging.find_by(id: params[:id])
    if @tagging
      render :show
    else
      render json: ["cannot find tagging!"], status: 422
    end
  end

  def destroy
    @tagging = Tagging.find_by(deck_id: params[:deck_id], tag_id: params[:tag_id])
    if @tagging.destroy
      render :delete
    else
      render json: ["cannot find tagging"], status: 422
    end
  end

  def tagging_params
    params.permit(:deck_id, :tag_id)
  end
end
