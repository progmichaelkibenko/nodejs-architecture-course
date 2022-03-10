const { Product } = require("../entities");
const {
  addProduct: addProductRepository,
  getProductById: getProductByIdRepository,
  updateProductById: updateProductByIdRepository,
  deleteProductById: deleteProductByIdRepository,
  getProducts: getProductsRepository,
} = require("../repositories/Product.repository");

const addProduct = async ({ product }) => {
  return addProductRepository({ product: new Product(product) });
};

const getProductById = async ({ id }) => {
  return getProductByIdRepository({ id });
};

const updateProductById = async ({ id, product }) => {
  return updateProductByIdRepository({ id, product: new Product(product) });
};

const deleteProductById = async ({ id }) => {
  return deleteProductByIdRepository({ id });
};

const getProducts = async () => {
  return getProductsRepository();
};
module.exports = {
  addProduct,
  getProductById,
  updateProductById,
  deleteProductById,
  getProducts,
};
