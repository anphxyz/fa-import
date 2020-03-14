/**
 * @author Anph - 21/11/2017
*/
const bodyParser = require('body-parser'),
  express = require('express');

global.log = require('./utils/log')

require('./config/Global')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use((req, res, next) => {//root middleware
  try {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress ||
      req.socket.remoteAddress || req.connection.socket.remoteAddress
    log.warn('\x1b[31m', '-from:', ip, '\x1b[34m', '-to->', req.headers.host + req.url, '\x1b[0m')
    //
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    return next()
  } catch (error) {
    log.error('--midleware error: ', error)
  }
})
require('./routers')(app)

app.listen(process.env.PORT, () => log.info(`server starting.. {mode: ${process.env.NODE_ENV}, port: ${process.env.PORT}}`))
