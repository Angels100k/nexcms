import { MongoClient, ConnectOptions } from 'mongodb';

const uri = process.env.MONGODB_URI || ''

let client
let clientPromise: any

if (!process.env.MONGODB_URI) {
  throw new Error('Add Mongo URI to env file')
}

client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions)
clientPromise = client.connect()


export default clientPromise