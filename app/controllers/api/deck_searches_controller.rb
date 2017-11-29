class Api::DeckSearchesController < ApplicationController
  def index
    @decks = Deck.top_five_results(deck_search_params[:title])
  end

  def deck_search_params
    params.require(:search).permit(:title)
  end
end
