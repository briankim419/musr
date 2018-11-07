class Review < ApplicationRecord
  belongs_to :album
  belongs_to :user

  validates :rating, presence: true, numericality: {greater_than_or_equal_to: 0, less_than_or_equal_to: 5}
  validates :body, presence: true
end
