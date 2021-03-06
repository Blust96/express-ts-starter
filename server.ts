import express from 'express';
import config from './config';

const app: express.Application = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(config.server.port, () => {
  console.log(`Server is running on http://localhost:${config.server.port}/`);
});