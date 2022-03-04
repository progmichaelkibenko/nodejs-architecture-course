const { db } = require("../frameworks/db/inMemory");

const addProduct = ({ product }) => {
  db.products.push(product);
  return product;
};

module.exports = { addProduct };
