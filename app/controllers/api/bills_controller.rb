class Api::BillsController < ApplicationController

  def index
   @bills = Bill.all
   render json: @bills
  end
  
 

  def show
    @house = House.find(params[:id])
    @bills = @house.bills.all
    
    render json: {
      house: @house,
      bills: @bills
    }
  end
  
  def create
    @house = House.find(params[:house_id])
    @bill = Bill.create!(bill_params)

    if @bill.save
      render json: @bill
    else
      render json: {
        message: 'Error when creating Bill'
      }
    end
  end
  
  def update
    @bill = Bill.find params[:id]

    if @bill.update(bill_params)
      render json: @bill
    else
      render json: {
        message: 'Error when updating Bill'
      }  
    end  
  end
  
  def destroy
    @bill = Bill.find(params[:id])
    @bill.destroy

    render json: {
      message: 'Bill successfully destroyed'
    }
  end

  private

  def bill_params
    params.permit(:utility, :company, :phone_number, :account_number, :name, :email, :house_id).merge(house_id: params[:house_id])
  end
end
