const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const c = require('config')

const app = express()
const PORT = config.get('PORT') || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

async function serverStart() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    })
    app.listen(PORT, () => {
      console.log(`Server has been started on ${PORT} port...`)
    })
  } catch (e) {
    console.log(`Server has not been started. Error message: ${e.message}`)
    process.exit(1)
  }
}
