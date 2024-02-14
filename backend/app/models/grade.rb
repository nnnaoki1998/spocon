class Grade < ApplicationRecord
  self.table_name = "grade"
  has_many :teams
end
