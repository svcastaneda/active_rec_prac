require 'bundler'
Bundler.require
:adapter => "postgresql"
:database => "your_db_name_here"

get '/' do
"hello world"
end