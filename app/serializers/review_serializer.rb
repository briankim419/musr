class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :body, :album_id, :user_id, :user, :current_user

end
