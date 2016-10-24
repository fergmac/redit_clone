const { Genre } = require('../database.js');

function GenreRoutes(router) {
  router.post('/', (req, res) => {
    const { title } = req.body;
    Genre.create({
      title,
    }).then((genre) => {
      res.json(genre);
    });
  });
  router.get('/', (req, res) => {
    Genre.findAll().then(genres => res.json(genres));
  });
  return router;
}

module.exports = GenreRoutes;
