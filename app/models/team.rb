class Team < ApplicationRecord
  self.table_name = "team"
  belongs_to :sport
  belongs_to :grade
end
