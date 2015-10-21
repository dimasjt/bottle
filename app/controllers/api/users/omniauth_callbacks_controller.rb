class Api::Users::OmniauthCallbacksController < DeviseTokenAuth::OmniauthCallbacksController
  def redirect_callbacks
    devise_mapping = request.env['omniauth.params']['resource_class'].underscore.to_sym
    redirect_route = "#{request.protocol}#{request.host_with_port}/api/auth/#{params[:provider]}/callback"

    session['dta.omniauth.auth'] = request.env['omniauth.auth'].except('extra')
    session['dta.omniauth.params'] = request.env['omniauth.params']

    redirect_to redirect_route
  end
end