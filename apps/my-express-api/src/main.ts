import express from 'express';
import dotenv from 'dotenv';
import profileRouter from './routes/profile.router';
import path from 'path';
import { apiReference } from '@scalar/express-api-reference'



dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

//router
app.use("/profiles", profileRouter);

const OpenApiSpecification = require(path.join(__dirname, "scalar-output.json"));

app.use(
  '/reference',
  apiReference({
    spec: {
      content: OpenApiSpecification,
    },
  }),
)


// Global error handler

//log
app.listen(PORT, () => {
  console.log(`Server is accessible at http://localhost:${PORT}`);
});