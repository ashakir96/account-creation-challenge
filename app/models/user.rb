class User < ApplicationRecord
  validates :username, presence: true, length: { minimum: 10, maximum: 50 }, uniqueness: true
  validates :password, presence: true, length: { minimum: 20, maximum: 50 }
  validate :password_complexity

  private

  def password_complexity
    return if password.blank?

    unless password.match?(/\d/)
      errors.add(:password, "must contain at least one number")
    end

    unless password.match?(/[a-zA-Z]/)
      errors.add(:password, "must contain at least one letter")
    end

    unless Zxcvbn.test(password).score >= 2
      errors.add(:password, "must have a strength score of at least 2")
    end
  end
end