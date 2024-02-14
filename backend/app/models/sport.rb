class Sport < ApplicationRecord
  self.table_name = "sport"
  has_many :teams
end
