const { Album } = require('../database.js');

function ApiRoutes(router) {
  router.post('/albums/new', (req, res) => {
    const { title, artist, genre, description, link } = req.body;
    Album.create({
      title,
      artist,
      genre,
      description,
      link,
    }).then((album) => {
      res.json(album);
    });
  });
  router.get('/albums', (req, res) => {
    Album.findAll().then(albums => res.json(albums));
  });
  return router;
}

module.exports = ApiRoutes;
