Rails.application.config.middleware.use OmniAuth::Builder do
  # provider :github,        ENV['GITHUB_KEY'],   ENV['GITHUB_SECRET'],   scope: 'email,profile'
  provider :facebook, "187932744876967", "874fa4e8599770d4910716f04e7db01b"
  # provider :google_oauth2, ENV['GOOGLE_KEY'],   ENV['GOOGLE_SECRET']
end