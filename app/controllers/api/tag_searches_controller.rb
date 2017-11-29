class Api::TagSearchesController < ApplicationController
  def index
    @tags = Tag.top_five_results(search_tag_params[:name])
    render :index
  end

  def search_tag_params
    params.require(:search).permit(:name)
  end
end
