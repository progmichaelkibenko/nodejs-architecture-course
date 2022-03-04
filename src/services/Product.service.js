const { Product } = require("../entities");
const {
  addProduct: addProductRepository,
} = require("../repositories/Product.repository");

const addProduct = async ({ product }) => {
  return addProductRepository({ product: new Product(product) });
};

module.exports = { addProduct };
