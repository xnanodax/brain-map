class Api::CardsController < ApplicationController
  def index
    @cards = Deck.all.find_by(id: params[:deck_id]).cards
  end

  def create
    @card = Card.new(card_params)
    @card.author_id = current_user.id
    @card.deck_id = params[:deck_id]

    if @card.save
      render :show
    else
      render json: @card.errors.full_messages, status: 422
    end

  end

  def show
    @card = Card.find_by(id: params[:id])

    if @card
      render :show
    else
      render json: ["this card does not exist"], status: 422
    end
  end

  def update
    @card = current_user.own_cards.find_by(id: params[:id])

    if @card && @card.update_attributes(card_params)
      render :show
    elsif @card
      render json: [@card.id].concat([Time.now]).concat(@card.errors.full_messages), status: 424
    else
      render json: ["can't edit this card! it's not yours."], status: 422
    end
  end

  def destroy
    @card = current_user.own_cards.find_by(id: params[:id])

    if @card
      @card.destroy
      render :delete
    else
      render json: ["cannot delete card, it is not yours"], status: 422
    end
  end

  def card_params
    params.require(:card).permit(:keyword, :body)
  end
end
