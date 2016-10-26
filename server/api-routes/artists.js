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
  router.get('/api/artists', (req, res) => {
    Artist.findAll({
      where: {
        genreId: {
          $ne: null,
        },
      },
    }).then(artists => res.json(artists));
  });
  return router;
}

module.exports = ArtistRoutes;
