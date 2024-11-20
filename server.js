const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 4020

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '../dist')))

app.get('/', (req, res) => {
  res.send(path.join(__dirname, '/dist/index.html'))
}

app.listen(PORT, () => {
  console.log(`BucketLab_Gamma Server is spinning on port ${PORT}`)
})