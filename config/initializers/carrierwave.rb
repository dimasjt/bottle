CarrierWave.configure do |config|
  if Rails.env.production?
    config.cache_dir = "#{Rails.root}/tmp/uploads"
  end
end