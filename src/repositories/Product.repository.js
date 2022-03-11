const { db } = require("../frameworks/db/inMemory");
const { uuid: uuidv4 } = require("uuidv4");

const addProduct = async ({ product }) => {
  if (!product.id) {
    product.id = uuidv4();
  }
  db.products.push(product);
  return product;
};

const getProductById = async ({ id }) => {
  return db.products.find((item) => item.id === id && !item.deletedAt) || null;
};

const deleteProductById = async ({ id }) => {
  const index = db.products.findIndex((item) => item.id === id);
  const willBeDeletedProduct = db.products[index];
  const deletedProduct = { ...willBeDeletedProduct, deletedAt: new Date() };
  db.products[index] = deletedProduct;
  return deletedProduct;
};

const updateProductById = async ({ id, product }) => {
  const index = db.products.findIndex((item) => item.id === id);
  const updatedProduct = {
    ...product,
    updatedAt: new Date(),
  };
  db.products[index] = updatedProduct;
  return updatedProduct;
};

const getProducts = async () => {
  return db.products.filter((item) => !item.deletedAt);
};

module.exports = {
  addProduct,
  getProductById,
  deleteProductById,
  updateProductById,
  getProducts,
};
