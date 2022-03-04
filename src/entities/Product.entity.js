const Product = class Product {
  constructor({
    id = null,
    name = null,
    description = null,
    images = [],
    price = 0,
    size = null,
    color = null,
    meta = {},
  }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.images = images;
    this.price = price;
    this.size = size;
    this.color = color;
    this.meta = meta;
  }
};

module.exports.Product = Product;
