class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :confirmable, :omniauthable
          
  include DeviseTokenAuth::Concerns::User

  validates :nickname, format: { with: /\A[a-zA-Z0-9]+\Z/ }
end
