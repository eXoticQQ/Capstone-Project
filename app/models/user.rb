class User < ApplicationRecord
    has_secure_password
    has_one_attached :picture
    has_many :posts, dependent: :destroy
    has_many :user_followers, through: :posts
    has_many :comments, through: :posts, dependent: :destroy

    validates :email, uniqueness: true

    def see_users_posts
        self.posts.order(created_at: :desc)
    end
end
