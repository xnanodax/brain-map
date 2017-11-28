class Api::StudyscoreController < ApplicationController
  def index #get all learning scores by deck_id=
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

  # def update_by_card
  #
  # end

  def create
    @studyscore = Studyscore.new(studyscore_params)
    @studyscore.tester_id = current_user.id
    if @studyscore.save
      render :show
    else
      render json: @studyscore.errors.full_messages, status: 424
    end
  end

  def show
    @studyscore = Studyscore.find_by(id: params[:id])
    if @studyscore
      render :show
    else
      render json: ["card does not exist"], status: 424
    end
  end

  def update
    @studyscore = Studyscore.find_by(id: params[:id])
    if @studyscore
      @studyscore.update_attributes(studyscore_params)
      render :show
    else
      render json: ["cannot update score that isn't yours"], status: 424
    end
  end

  def destroy
    @studyscore = Studyscore.find_by(id: params[:id])
    if @studyscore
      @studyscore.destroy!
      render :destroy
    else
      render json: ["cannot delete score that isn't yours"], status: 424
    end

  end

  def studyscore_params
    params.require(:studyscore).permit(:learning_score, :card_id)
  end

  def search_params
    params.require(:studyscore).permit(:learning_score, :card_id)
  end
end
