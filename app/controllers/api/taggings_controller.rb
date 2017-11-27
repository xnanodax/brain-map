class Api::TaggingsController < ApplicationController
  def index
    # @taggings = Tagging.all
    @taggings = Deck.find_by(id: params[:deck_id]).taggings
  end

  def create
    @tag = Tagging.find_using_tag_name(params[:tagging][:name])
    if @tag
      params[:tagging].delete :name
      params[:tagging][:tag_id] = @tag.id

      @tagging = Tagging.new(tagging_params)
      if @tagging.save
        render :show
      else
        render json: ["tagging already exist"], status: 422
      end

    else
      @tag = Tag.new(tag_params)
      @tag.save

      tag_id = @tag.id
      params[:tagging][:tag_id] = tag_id

      @tagging = Tagging.new(tagging_params)
      @tagging.save
      render :show

    end


    # @tagging = Tagging.new(tagging_params)
    # if @tagging.save
    #   render :show
    # else
    #
    #   # render json: @tagging.errors.full_messages, status: 422
    # end
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
    # @tagging = Tagging.find_by(tag_id: params[:tagging][:tag_id], deck_id: params[:tagging][:deck_id])
    @tagging = Tagging.find_by(id: params[:id])
    if @tagging
      @tagging.destroy
      render :delete
    else
      render json: ["cannot find tagging"], status: 422
    end
  end

  def tagging_params
    params.require(:tagging).permit(:deck_id, :tag_id)
  end

  def tag_params
    params.require(:tagging).permit(:name)
  end
end
