class LoginJob < ApplicationJob
  queue_as :default

  def perform(*args)
    LoginMailer.submission(message).deliver
  end
end
