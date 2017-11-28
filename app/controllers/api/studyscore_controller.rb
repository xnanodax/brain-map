class Api::StudyscoreController < ApplicationController
  def index
    @studyscores = Deck.fetch_user_score(params[:deck_id], current_user.id)
  end

  def fetch
    card = Card.find_by(id: params[:studyscore][:card_id])

    if card
      @studyscore = card.studyscores.find_by(tester_id: current_user.id)
      render :show
    else
      render json: ["cannot find card"], status: 424
    end
  end

  def create
    @studyscore = Studyscore.new(studyscore_params)
    @studyscore.tester_id = current_user.id

    if @studyscore.save
      render :show
    else
      render json: @studyscore.errors.full_messages, status: 424
    end
  end

  def update_by_card
    card = Card.find_by(id: params[:studyscore][:card_id])
    
    if card
      @studyscore = card.studyscores.find_by(tester_id: current_user.id)
      @studyscore.update_attributes(studyscore_params)
      render :show
    else
      render json: ["cannot update card to update score"], status: 424
    end
  end

  def studyscore_params
    params.require(:studyscore).permit(:learning_score, :card_id)
  end

end
