const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    include: [
      {
        model: Product,
        attributes: {exclude: ['product_tag']},
        through: ProductTag,
        as: 'product'        
      }
    ]
  })
  .then(dbTagData => res.json(dbTagData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {id: req.params.id},
    include: [
      {
        model: Product,
        attributes: {exclude: ['product_tag']},
        through: ProductTag,
        as: 'product'        
      }
    ]
  })
  .then(dbTagData => {
    if(!dbTagData) {
      res.status(404).json({message: 'No tag found with this ID'});
      return;
    }
    res.json(dbTagData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// create a new tag
// params of tag_name(color)
router.post('/', (req, res) => {
  Tag.create(req.body)
  .then(dbTagData => res.status(200).json(dbTagData))
  .catch(err => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {where: {id: req.params.id}})
  .then(dbTagData => res.status(200).json(dbTagData))
  .catch(err => {
    console.log(err);
    res.status(400).json(err);
  });
});

router.delete('/:id', (req, res) => {
  Tag.destroy({where: {id: req.params.id}})
  .then(dbTagData => {
    if(!dbTagData) {
      res.status(404).json({message: 'No tag found with this ID'});
      return;
    }
    res.json(dbTagData);
  })
  .catch(err => {
    console.log(err);
    res.status(400).json(err);
  });
});

module.exports = router;
