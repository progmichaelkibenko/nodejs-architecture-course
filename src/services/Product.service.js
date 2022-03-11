const { isUuid } = require("uuidv4");
const { ResponseError } = require("../frameworks/common");

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
  const isValidId = isUuid(id);
  if (!isValidId) {
    return Promise.reject(
      new ResponseError({ statusCode: 400, msg: "Invalid URL" })
    );
  }
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
