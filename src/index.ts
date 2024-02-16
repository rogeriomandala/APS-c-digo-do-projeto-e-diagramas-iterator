import express from 'express';
import 'reflect-metadata';
import routes from './routes';
import cors from 'cors';
import helmet from 'helmet';
import { AppDataSource } from './database/connection';

const app = express();
const port = process.env.PORT || 80;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(routes);

app.listen(port, async () => {
  AppDataSource.initialize()
    .then(() => {
      console.log(`Server started on port ${port}`);
      console.info(`Database successfully connected!`);
    })
    .catch((error) => {
      console.error('Error connecting to database: ', error);
      console.log(`Stopping the server ${port}`);
      return process.exit(1);
    });
});