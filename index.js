// Reference for TypeScript setup and final build
// https://khalilstemmler.com/blogs/typescript/node-starter-project/

// List of available SOAP endpoints to hit
// https://contentapitrain.globusfamily.com/gvitawapi.asmx
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const globus = require('./globus.js')

const app = express()
app.use(cors())
app.use(helmet())
app.use(express.json())

app.listen(8000)

app.get('/', (req, res) => {
  res.send('Hello Daniel')
})

app.use('/api/v1/globus', globus)
