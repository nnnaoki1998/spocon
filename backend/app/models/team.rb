class Team < ApplicationRecord
  self.table_name = "team"
  belongs_to :sport
  belongs_to :grade

  def initialize(*)
    super
    self.uuid = SecureRandom.uuid
  end
end
