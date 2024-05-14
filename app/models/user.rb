class User < ApplicationRecord
  validates :username, presence: true, length: { minimum: 10, maximum: 50 }
  validates :password, presence: true

  def self.validate_username(username)
      if User.exists?(username: username)
          errors.add(:username, "has already been taken")
      end
  end

  def self.validate_password(password)
      if password.present? && (password.length < 20 || password.length > 50)
            errors.add(:password, "must be between 20 and 50 characters")
          elsif password.present? && !password.match?(/\d/) # Contains at least 1 number
            errors.add(:password, "must contain at least one number")
          elsif password.present? && !password.match?(/[a-zA-Z]/) # Contains at least 1 letter
            errors.add(:password, "must contain at least one letter")
          elsif password.present? && Zxcvbn::PasswordStrength.test(password).score < 2
            errors.add(:password, "must have a strength score of at least 2")
          end
  end
end
