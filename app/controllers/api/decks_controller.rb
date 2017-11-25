class Api::DecksController < ApplicationController

  def index
    @decks = Deck.all.where(author_id: current_user.id)
    # @decks = Deck.all
  end

  def create
    @deck = Deck.new(deck_params)
    @deck.author_id = current_user.id
    if @deck.save
      render :show
    else
      render json: @deck.errors.full_messages, status: 422
    end
  end

  def show
    @deck = Deck.find_by(id: params[:id])
    if @deck
      render :show
    else
      render json: ["this deck does not exist"], status: 422
    end
  end

  def edit
    @deck = current_user.decks.find_by(id: params[:id])
  end

  def update
    @deck = current_user.decks.find_by(id: params[:id])
    if @deck
      @deck.update_attributes(deck_params)
      render :show
    else
      render json: ["can't edit this deck! it's not yours."], status: 422
    end
  end

  def destroy
    @deck = current_user.decks.find_by(id: params[:id])
    if @deck
      @deck.destroy
      render :delete
    else
      render json: ["cannot delete deck, it is not yours"], status: 422
    end
  end

  def deck_params
    params.require(:deck).permit(:title, :id)
  end

end
