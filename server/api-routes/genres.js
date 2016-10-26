const { Genre } = require('../database.js');
const { Artist } = require('../database.js');
function GenreRoutes(router) {
  // router.post('/genres', (req, res) => {
  //   const { title } = req.body;
  //   Genre.create({
  //     title,
  //   }).then((genre) => {
  //     res.json(genre);
  //   });
  // });
  router.get('/api/genres', (req, res) => {
    Genre.findAll({
      include: [{
        model: Artist,
      }],
    }).then(genres => res.json(genres));
  });
  return router;
}

module.exports = GenreRoutes;
