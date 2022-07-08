class AuthenticationController < ApplicationController

  skip_before_action :authorize, only: [:login, :auto_login]

  def login

    @user = User.find_by(username: params[:username])
    
    if @user && @user.authenticate(params[:password])
      payload = { user_id: @user.id }
      secret = 'tZFkyaT@bGj(y/cXK@*2yC6UT44dc+'
      token = JWT.encode payload, secret
      render json: { user: UserSerializer.new(@user), jwt: token }, status: :accepted   
    else
      render json: { message: 'Invalid username or password' }, status: :unauthorized
    end
  end

  def auto_login
    @token = params[:token]
    user = User.find(JWT.decode(@token, 'tZFkyaT@bGj(y/cXK@*2yC6UT44dc+', true, algorithm: 'HS256')[0]["user_id"])
    render json: user
  end

  private

  def unathorized_user
    render(
      json: { message: 'Invalid username or password.' }, 
      status: :unauthorized
    )
  end
end
