const { Artist } = require('../database.js');

function ArtistRoutes(router) {
  router.post('/', (req, res) => {
    const { name } = req.body;
    Artist.create({
      name,
    }).then((artist) => {
      res.json(artist);
    });
  });
  router.get('/', (req, res) => {
    Artist.findAll().then(artists => res.json(artists));
  });
  return router;
}

module.exports = ArtistRoutes;
