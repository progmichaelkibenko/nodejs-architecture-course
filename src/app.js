const express = require("express");

const app = express();

const PORT = process.env.PORT || 4000;

const API_PREFIX = process.env.API_PREFIX || "api/v1";

const { productController } = require("./controllers");

const { ErrorHandler } = require("./frameworks/expressSpecific/ErrorHandler");

const start = () => {
  // midlewares
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Routes/Controllers
  productController.addProduct({ app, api_prefix: API_PREFIX });

  // Error Handler
  app.use(ErrorHandler);

  app.listen(PORT, () => {
    console.log(`WOOOHHHOOO our server is runing on PORT ${PORT}`);
  });
};

module.exports = { start };
