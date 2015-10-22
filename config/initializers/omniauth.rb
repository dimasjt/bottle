Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, "187932744876967", "874fa4e8599770d4910716f04e7db01b",
    scope: 'email,user_birthday', info_fields: 'email,birthday,name'
end