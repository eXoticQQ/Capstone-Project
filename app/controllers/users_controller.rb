class UsersController < ApplicationController

    skip_before_action :authorize, only: :create

    def index
        @users = User.all
        render json: @users, status: :ok
    end

    def show
        user = User.find(params[:id])
        render json: user, status: :ok, serializer: UserSerializer
    end

    def create
        @user = User.create!(user_params)
        if @user.valid?
            render json: { user: @user, status: :created}
        else
            render json: { error: 'failed to create user', status: :not_acceptable}
        end
    end

    private

    def user_params
        params.permit(:username, :password)
    end
end
