import { Db, MongoClient } from 'mongodb';

const MONGO_URL = 'mongodb://mongo:27017';
const MONGO_DB_NAME = 'naive-cms-development';

export const connectToDB = (): Promise<Db> => {
  const mongoClient = new MongoClient(MONGO_URL, { useNewUrlParser: true });

  console.log(`...connecting to MongoDB server at ${MONGO_URL}`);

  return new Promise((resolve, reject) => {
    mongoClient.connect((err) => {
      if (err) {
        console.log('❌ error connecting to MongoDB server');
        reject(err);
      }

      console.log('✅ connected to MongoDB server');

      resolve(mongoClient.db(MONGO_DB_NAME));
    });
  });
};
