class PostSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :description, :likes, :image, :user_comments
  belongs_to :user
  # has_many :comments

  def user_comments
    object.comments.map do |comment|
      {
        id: comment.id,
        likes: comment.likes,
        comment: comment.comment,
        user: comment.user.username
      }
    end
  end

  def image
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end
end
