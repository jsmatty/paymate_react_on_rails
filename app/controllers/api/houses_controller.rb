class Api::HousesController < ApplicationController

  def index
    @houses = House.all

    render json: @houses
  end
  
  def show
    @house = House.find(params[:id])
    @users = @house.users.all
    @bills = @house.bills.all

    render json: {
      house: @house,
      users: @users,
      bills: @bills
    }
  end
  
end