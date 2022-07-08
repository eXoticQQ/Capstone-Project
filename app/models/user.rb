class User < ApplicationRecord
    has_secure_password
    has_one_attached :picture
    has_many :user_followers, dependent: :destroy
    has_many :posts, dependent: :destroy
    has_many :comments, through: :posts
end
