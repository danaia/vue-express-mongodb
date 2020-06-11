var morgan = require('morgan')
require('dotenv').config()

// Create express app
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const env = process.env.ENV
const port = env.port || 8080
const chalk = require('chalk')

/**
 * APP CONFIGURATION
 */
app.use(morgan('dev'))
app.use(bodyParser.json({ limit: '1mb' }))
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }))
app.use(cors())

app.listen(port, function() {
  console.log('Developer server running on http://localhost:' + port)
})

app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*')

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  // Pass to next layer of middleware
  next()
})

const mongoUri = 'mongodb://' + process.env.DB_HOST + '/' + process.env.DB_NAME
const mongoOpt = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(mongoUri, mongoOpt)

//api
// add controllers..

/**
 * WEBPACK - CONFIG
 */

// Generate webpack config with CLI service
const webpackConfig = require('@vue/cli-service/webpack.config.js')
// Configure webpack as middleware
const webpack = require('webpack')
const compiler = webpack(webpackConfig)
const devMiddleware = require('webpack-dev-middleware') // eslint-disable-line
app.use(
  devMiddleware(compiler, {
    noInfo: false,
    publicPath: webpackConfig.output.publicPath,
    headers: { 'Access-Control-Allow-Origin': '*' },
    stats: { colors: true, excludeModules: false, hiddenModules: true },
    displayModules: true,
    excludeModules: false
  })
)
// WEBPACK
const hotMiddleware = require('webpack-hot-middleware')
app.use(
  hotMiddleware(compiler, {
    log: console.log
  })
)

// Server index.html page when request to the root is made
app.get('/', function(req, res, next) {
  res.sendfile('./public/index.html')
})
