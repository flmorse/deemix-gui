'use strict'
// import path from 'path'
//
// import express, { Application } from 'express'
// import cookieParser from 'cookie-parser'
// import logger from 'morgan'
// import indexRouter from './routes'
// import usersRouter from './routes/users'
//
// const app: Application = express()
// // const port = 3000
//
// app.use(logger('dev'))
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
// app.use(cookieParser())
// app.use(express.static(path.join(__dirname, 'webui', 'public')))
//
// app.use('/', indexRouter)
// app.use('/users', usersRouter)
//
// export default app
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod }
}
Object.defineProperty(exports, '__esModule', { value: true })
const express_1 = __importDefault(require('express'))
// rest of the code remains same
const app = express_1.default()
const PORT = 8000
app.get('/', (req, res) => res.send('Express + TypeScript Server'))
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
})
