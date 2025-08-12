const express = require('express')
const app = express()
const port = 3000

// parse the request body
app.use(express.json());

// API Section
app.post('/insert-user', (request, response) => {
    console.log(`request received is = ${JSON.stringify(request.body)}`)
    response.send('user inserted successfully')
})

// Create an api below to send request body in reponse
app.post('/insert-user-1', (request, response) => {
    console.log(`request received is = ${JSON.stringify(request.body)}`)
    response.send(`${JSON.stringify(request.body)}`)
})

app.post('/insert-user-2', (request, response) => {
    console.log(`request received is = ${JSON.stringify(request.body)}`)
    response.json(request.body)
})

app.post('/insert-person', (request, response) => {
    console.log(`request received is = ${JSON.stringify(request.body)}`)
    response.send(`person name is ${JSON.stringify(request.body.Name)}`)
})


app.listen(port, () => {
    console.log("my backend server is started at port " + port)
})