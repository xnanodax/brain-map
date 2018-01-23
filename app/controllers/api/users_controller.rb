class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def recent_decks
    @recent_decks = current_user.five_recently_played_decks

    if @recent_decks
      render :recent_decks
    else
      render json: ["cannot find 5 recently played decks"], status: 424
    end
  end

  def popular_decks
    @popular_decks = current_user.five_most_popular_decks

    if @popular_decks
      render :popular_decks
    else
      render json: ["cannot find your popular decks"], status: 424
    end
  end

  def user_params
    params.require(:user).permit(:username, :email, :password, :img_url)
  end

end
