/**
 * Updated by trungquandev.com's author on August 17 2023
 * YouTube: https://youtube.com/@trungquandev
 * "A bit of fragrance clings to the hand that gives flowers!"
 */
import { MongoClient, ServerApiVersion } from 'mongodb'
import { env } from './environment'

let TrelloDatabaseInstance = null

const mongoclientInstance = new MongoClient(env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export const CONNECT_DB = async () => {

  await mongoclientInstance.connect()

  TrelloDatabaseInstance = mongoclientInstance.db(env.DATABASE_NAME)
}

export const GET_DB = () => {
  if (!TrelloDatabaseInstance) throw new Error('Must connect to Database firt!')
  return TrelloDatabaseInstance
}

export const CLOSE_DB = async () => {
  await mongoclientInstance.close()
}