# app/controllers/api/users_controller.rb
module Api
  class UsersController < ApiController
    def create_account
        @user = User.new(user_params)
        if @user.save
          render json: { message: 'User created successfully' }, status: :created
        else
          render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity
        end
      end

      private

      def user_params
        params.require(:user).permit(:username, :password)
      end
  end
end
