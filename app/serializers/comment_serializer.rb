class CommentSerializer < ActiveModel::Serializer
  attributes :id, :likes, :comment, :post_date
end
