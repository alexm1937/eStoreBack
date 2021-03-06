// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, { 
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
})



// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'tag',
  foreignKey: 'product_id'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'product',
  foreignKey: 'tag_id'
});

//connect productTag to tag and product
ProductTag.belongsTo(Product, {foreignKey: 'product_id'});
ProductTag.belongsTo(Tag, {foreignKey: 'tag_id'});

//connect tag and product to ProductTag
Product.hasMany(ProductTag, {foreignKey: 'product_id'});
Tag.hasMany(ProductTag, {foreignKey: 'tag_id'});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
