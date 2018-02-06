class Api::DecksController < ApplicationController

  def index
    @decks = Deck.all.where(author_id: current_user.id)
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
      @deck.mastery_score(current_user.id)
      render :show
    else
      render json: ["this deck does not exist"], status: 422
    end
  end

  def update
    @deck = current_user.own_decks.find_by(id: params[:id])

    if @deck && @deck.update_attributes(deck_params)
      render :show
    elsif @deck
      render json: [Time.now].concat(@deck.errors.full_messages), status: 424
    else
      render json: ["can't edit this deck! it's not yours."], status: 422
    end
  end

  def destroy
    @deck = current_user.own_decks.find_by(id: params[:id])

    if @deck
      @deck.destroy
      render :delete
    else
      render json: ["cannot delete deck, it is not yours"], status: 422
    end
  end

  def deck_params
    params.require(:deck).permit(:title)
  end

end
