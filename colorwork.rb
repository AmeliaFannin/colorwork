require 'sinatra'

require 'bundler'

# set :server, 'thin'

get '/' do
  redirect '/grid.html'
end


