class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end
  
  def show
    @house = House.find(params[:house_id])
    @users = @house.users.all

    render json: {
      house: @house,
      users: @users
    }
  end
  
  def create
    @user = User.new user_params

    if @user.save
      render json: @user
    else
      render json: {
        message: 'Error when creating User'
      }
    end
  end
  
  def update
    @user = User.find params[:id]

    if @user.update(user_params)
      render json: @artist
    else
      render json: {
        message: 'Error when updating User'
      }  
    end  
  end
  
  def destroy
    @user = User.find(params[:id])
    @user.destroy

    render json: {
      message: 'Artist successfully destroyed'
    }
  end

  private

  def user_params
    params.require(:user).permit(:name, :image, :username, :birthday, :bio)
  end
end
