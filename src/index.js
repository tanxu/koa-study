// const Koa = require('koa')
// const path = require('path')
import Koa from 'koa'
import path from 'path'
// const helmet = require('koa-helmet')
// const statics = require('koa-static')
import helmet from 'koa-helmet'
import statics from 'koa-static'

const app = new Koa()

// const router = require('./routers/routers')
import router from './routers/routers'


app.use(helmet())
app.use(statics(path.join(__dirname, '../public')))
app.use(router())


app.listen(3000)