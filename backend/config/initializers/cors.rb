Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins "http://localhost:8080"
    resource "*", methods: :any, headers: :any
  end
end
