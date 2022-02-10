const express = require('express')
const cors = require('cors')
const ctrl = require('./controller')
const app = express()


app.use(cors())
app.use(express.json())

app.post('/api/messages', ctrl.createMessage)

app.listen(4004, console.log('Server is running on 4004'))
