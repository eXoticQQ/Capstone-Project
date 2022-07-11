class UserFollower < ApplicationRecord
    belongs_to :user

    def self.user_and_followers
        self.all.map do |user|
            {
                user: user.id,
                follower_id: user.follower_id
            }
        end
    end
end
