const { Artist } = require('../database.js');
const { Genre } = require('../database.js');

function ArtistRoutes(router) {
  // router.post('/api/artists/new', (req, res) => {
  //   const { name } = req.body;
  //   Artist.create({
  //     name,
  //   }).then((artist) => {
  //     res.json(artist);
  //   });
  // });
  router.get('/api/artists', (req, res) => {
    Artist.findAll({
      include: [{
        model: Genre,
      }],
    }).then(artists => res.json(artists));
  });
  return router;
}

module.exports = ArtistRoutes;
