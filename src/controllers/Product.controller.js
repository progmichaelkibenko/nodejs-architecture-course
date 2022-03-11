const productService = require("../services");
const { Response } = require("../frameworks/common");

const ENTITY_NAME = "product";

const addProduct = ({ app, api_prefix = "legacy" }) => {
  app.post(`/${api_prefix}/${ENTITY_NAME}`, async (req, res, next) => {
    try {
      const { product } = req.body;
      const result = await productService.addProduct({ product });
      const response = new Response({ ok: true, content: result });
      res.json(response);
      next();
    } catch (err) {
      next(err);
    }
  });
};

const getProductById = ({ app, api_prefix = "legacy" }) => {
  app.get(`/${api_prefix}/${ENTITY_NAME}/:id`, async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await productService.getProductById({ id });
      const response = new Response({ ok: true, content: result });
      res.json(response);
      next();
    } catch (err) {
      next(err);
    }
  });
};

const updateProductById = ({ app, api_prefix = "legacy" }) => {
  app.put(`/${api_prefix}/${ENTITY_NAME}/:id`, async (req, res, next) => {
    try {
      const { id } = req.params;
      const { product } = req.body;
      const result = await productService.updateProductById({ id, product });
      const response = new Response({ ok: true, content: result });
      res.json(response);
      next();
    } catch (err) {
      next(err);
    }
  });
};

const deleteProductById = ({ app, api_prefix = "legacy" }) => {
  app.delete(`/${api_prefix}/${ENTITY_NAME}/:id`, async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await productService.deleteProductById({ id });
      const response = new Response({ ok: true, content: result });
      res.json(response);
      next();
    } catch (err) {
      next(err);
    }
  });
};

const getProducts = ({ app, api_prefix = "legacy" }) => {
  app.get(`/${api_prefix}/${ENTITY_NAME}s`, async (req, res, next) => {
    try {
      const result = await productService.getProducts();
      const response = new Response({ ok: true, content: result });
      res.json(response);
      next();
    } catch (err) {
      next(err);
    }
  });
};

module.exports = {
  addProduct,
  getProductById,
  getProducts,
  deleteProductById,
  updateProductById,
};
