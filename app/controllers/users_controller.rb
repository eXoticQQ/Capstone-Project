class UsersController < ApplicationController

    # skip_before_action :authorize, only: :create
    before_action :authorize, except: [:new, :create]

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
            SignupMailer.with(user: @user).signup_email.deliver_now
            render json: { user: @user, status: :created}
        else
            render json: { error: 'failed to create user', status: :not_acceptable}
        end
    end

    def show_posts
        user = User.find(params[:id])
        render json: user.see_users_posts, status: :ok
    end

    private

    def user_params
        params.permit(:username, :password, :email)
    end
end
