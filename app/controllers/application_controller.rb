class ApplicationController < ActionController::Base
 # Prevent CSRF attacks by raising an exception.

 protect_from_forgery unless: -> { request.format.json? }

 before_action :configure_permitted_parameters, if: :devise_controller?

 protected

 def configure_permitted_parameters
   devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :email, :user_name, :profile_photo])
 end

 def after_sign_in_path_for(resource)
  genres_path
end

end
