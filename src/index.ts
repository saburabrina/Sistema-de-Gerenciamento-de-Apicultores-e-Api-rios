import express from 'express';
import router from './routes';
import './database/connection';

const app = express();
const port = 3000;

router(app);

app.listen(port, () => console.log(`Server listening on port ${port}`));