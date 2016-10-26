const { User } = require('../database.js');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const jwt = require('jsonwebtoken');
const { JWTStrategy, ExtractJwt } = require('passport-jwt');
const config = require('../configs');
const cookieParser = require('cookie-parser');

function cookieExtractor(req) {
  let token = null;
  if (req && req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }
  return token;
}

const JWTOptions = {
  jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
  secretOrKey: config.get('APP_SECRET'),
};

function AuthRoutes(router) {
  router.use(cookieParser());
  router.use(passport.initialize());

  passport.use(new LocalStrategy({
    usernameField: 'email',
  }, (email, password, done) => {
    User.findOne({
      where: { email },
    }).then((user, err) => {
      if (err) return done(err);
      if (!user) return done(null, false);
      if (!user.verifyPassword(password)) return done(null, false);

      return done(null, {
        id: user.dataValues.id,
        email: user.dataValues.email,
      });
    });
  }));

  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((obj, done) => {
    done(null, obj);
  });

  router.post('/auth/login', (req, res, next) => {
    passport.authenticate('local', (err, user) => {
      if (err) return res.sendStatus(500);
      if (!user) {
        return res.sendStatus(403);
      }
      return req.logIn(user, (loginError) => {
        if (loginError) return res.sendStatus(500, 'There was a problem logging in.');

            // TODO: CREATE JWT and send to user!
        const token = jwt.sign({ user }, config.get('APP_SECRET'));

        res.cookie('token', {
          httpOnly: true,
          secure: false,
          expires: false,
        });
        return res.send({ success: true });
      });
    })(req, res, next);
  });
  return router;
}

module.exports = AuthRoutes;



// const { User } = require('../database.js');

// function ApiRoutes(router) {
//   router.post('/login', (req, res) => {
//     const { email, password } = req.body;
//     User.create({
//       email,
//       password,
//     }).then((user) => {
//       res.json(user);
//     });
//   });
//   router.get('/login', (req, res) => {
//     User.findAll().then(users => res.json(users));
//   });
//   return router;
// }

// module.exports = ApiRoutes;
