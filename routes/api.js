const { Router } = require('express');
const fisher = require('../lib/fisher');

const router = Router();

/* GET index page. */
router.get('/', (req, res) => {
  res.json({
    title: 'train-info'
  });
});

/* GET train-info. */
router.get('/info', (req, res) => {
  fisher.fetch(((status) => {
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.json(status);
  }));
});

module.exports = router;
