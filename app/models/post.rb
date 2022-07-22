class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy

  validates :description, presence: true

  has_one_attached :image

  def trending_posts
    Post.all.order(created_at: :desc)
  end

end
