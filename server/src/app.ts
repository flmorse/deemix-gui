import path from 'path'

import express, { Application } from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import indexRouter from './routes'
import usersRouter from './routes/users'

const app: Application = express()
const port = 6595

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'webui', 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)

try {
  app.listen(port, (): void => {
    console.log(`Connected successfully on port ${port}`)
  })
} catch (error) {
  console.error(`Error occured: ${error.message}`)
}
