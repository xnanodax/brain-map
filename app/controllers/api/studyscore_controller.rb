class Api::StudyscoreController < ApplicationController
  def index
    @studyscores = Deck.fetch_user_score(params[:deck_id], current_user.id)
  end

  def fetch
    card = Card.find_by(id: params[:studyscore][:card_id])

    if card
      @deck = card.deck
      render 'api/decks/show'
    else
      render json: ["cannot find card"], status: 424
    end
  end

  def update_by_card
    card = Card.find_by(id: params[:studyscore][:card_id])
    @studyscore = card.studyscores.find_by(tester_id: current_user.id)

    if card && @studyscore
      @studyscore.update_attributes(studyscore_params)
      @deck = card.deck
      render 'api/decks/show'
    elsif card
      @studyscore = Studyscore.new(studyscore_params)
      @studyscore.tester_id = current_user.id
      @studyscore.save
      @deck = card.deck

      render :show
    else
      render json: ["cannot update card to update score"], status: 424
    end
  end

  def studyscore_params
    params.require(:studyscore).permit(:learning_score, :card_id)
  end

end
