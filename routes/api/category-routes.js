 const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({ 
    include: [
      {
        model: Product,
        attributes: ['product_name']
      }
    ]
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  Category.findOne({ 
    where: {id: req.params.id},
    include: [
      {
        model: Product,
        attributes: ['product_name']
      }
    ]
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// create new categories
// req.body should have params of category_name
router.post('/', (req, res) => {
  Category.create(req.body)
  .then(dbCategoryData => res.status(200).json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(400).json(err);
  });  
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {where: {id: req.params.id}})
  .then(dbCategoryData => res.status(200).json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
