import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import models from './models';
import routes from './routes';

const app = express();

// * Application-Level Middleware * //

// Third-Party Middleware

app.use(cors());

// Built-In Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom Middleware

app.use((req, res, next) => {
  req.context = {
    models,
  };
  next();
});

// * Routes * //

app.use('/banners', routes.banners);
app.use('/categories', routes.categories);
app.use('/products', routes.products);

// * Start * //

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`),
);
