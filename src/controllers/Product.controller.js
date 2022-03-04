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

module.exports = { addProduct };
