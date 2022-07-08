class Post < ApplicationRecord
  belongs_to :user
  has_many :comments

  validates :description, presence: true

  has_one_attached :image
end
