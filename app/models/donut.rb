class Donut < ApplicationRecord
  CATEGORIES = []
  #For radio buttons, the array will likely be needed.  For this branch, we're
  #focused on getting the basic controller setup complete.
  validates :name, presence: true

  validates :category, presence: true

end
