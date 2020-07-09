import express from 'express';
import routes from './routes';

import './database';

const app = express();

// Query params: ?/plates = pizza
// Route params: /plates/
// Request body: {"restaurant": "zezao"}

app.use(express.json());
app.use(routes);

export default app;