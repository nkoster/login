const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.use(express.json())

app.use('/login', (req, res) => {
  console.log(req.body)
  const {username, password} = req.body
  if (username === 'niels' && password === 'aap') {
    return res.send({
      token: 'test123'
    })
  }
  res.send({
    error: 'not allowed'
  })
})

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'))
