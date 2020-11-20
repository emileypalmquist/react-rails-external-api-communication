class NasaApiController < ApplicationController
    NASA_API_KEY = ENV['nasa_api_key']
    
    def show
        response = RestClient.get "https://api.nasa.gov/planetary/apod?date=#{params[:date]}&hd=true&api_key=#{NASA_API_KEY}"
        result = JSON.parse(response)
        render json: result
    end
end
