import { app } from './app';
import { connectToDB } from './db';

const PORT = 4000;

connectToDB()
  .then((db) => {
    app.context.db = db;
    app.listen(PORT, () => console.log(`API server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error(err);
  });
