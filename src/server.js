import express from 'express'
import { CLOSE_DB, CONNECT_DB } from './config/mongodb'
import exitHook from 'async-exit-hook'
import { env } from './config/environment'
import { APIs } from './routes/v1'
import { errorHandlingMiddleware } from './middlewares/errorHandlingMiddleware'

const START_SERVER = () => {
  const app = express()

  app.use(express.json())

  app.use('/v1', APIs)

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    // eslint-disable-next-line no-console
    console.log(`Hello Trung Quan Dev, I am running at ${env.APP_HOST}:${env.APP_PORT}/`)
  })

  app.use(errorHandlingMiddleware)

  exitHook(() => {
    CLOSE_DB()
  })
}

CONNECT_DB()
  // eslint-disable-next-line no-console
  .then(() => console.log('connected to mongodb cloud atlst'))
  .then(() => START_SERVER())
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.log(error)
    process.exit(0)
  }
  )