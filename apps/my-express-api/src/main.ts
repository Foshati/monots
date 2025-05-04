import express from 'express';
import dotenv from 'dotenv';
import profileRouter from './routes/profile.router';
import path from 'path';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

//router
app.use("/profiles", profileRouter);

// Optional: API docs via Scalar
async function setupApiReference() {
  try {
    const { apiReference } = await import("@scalar/express-api-reference");
    const scalarDocument = require(path.join(__dirname, "scalar-output.json"));
    app.use(
      "/docs",
      apiReference({
        content: scalarDocument,
        theme: "purple",
      })
    );
    console.log(
      `API Reference available at http://localhost:${process.env.PORT || 6001
      }/docs`
    );
  } catch (err) {
    console.warn("No API Reference configured:", err);
  }
}
setupApiReference();


// Global error handler

//log
app.listen(PORT, () => {
  console.log(`Server is accessible at http://localhost:${PORT}`);
});