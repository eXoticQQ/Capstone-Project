class LoginController < ApplicationController

    def new

    end

    def create
        LoginJob.perform_later params.permit(:message)[:message]
    end
end
