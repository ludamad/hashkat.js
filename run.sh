./node_modules/coffee-script/bin/coffee --compile server/*.coffee
./node_modules/coffee-script/bin/coffee --compile public/*.coffee

node server/server.js
