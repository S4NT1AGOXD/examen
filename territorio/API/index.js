require('dotenv').config()
// ✅ correct import statement


const Server = require('./models/server')

const server = new Server()

server.listen()