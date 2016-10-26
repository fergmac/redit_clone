const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const config = require('./configs');

const db = new Sequelize(
    config.get('POSTGRES_DB'),
    config.get('POSTGRES_USER'),
    config.get('POSTGRES_PASSWORD'),
  {
    dialect: 'postgres',
    host: 'localhost',
    pool: {
      max: 5,
      min: 1,
      idle: 10000,
    },
  });
const Genre = db.define('genres', {
  title: { type: Sequelize.STRING },
});
const Artist = db.define('artists', {
  name: { type: Sequelize.STRING },
});
const Album = db.define('albums', {
  title: { type: Sequelize.STRING },
  artist: { type: Sequelize.STRING },
  genre: { type: Sequelize.STRING },
  description: { type: Sequelize.STRING },
  link: { type: Sequelize.TEXT },
});
const Tag = db.define('tag', {
  title: { type: Sequelize.STRING },
});

const User = db.define('user', {
  email: {
    type: Sequelize.STRING,
    unique: true,
    validate: { isEmail: true } },
  password: {
    type: Sequelize.TEXT,
    set(password) {
      const salt = bcrypt.genSaltSync(8);
      const hash = bcrypt.hashSync(password, salt);
      this.setDataValue('password', hash);
    },
  },
},
  {
    instanceMethods: {
      verifyPassword(password) {
        return bcrypt.compareSync(password, this.password);
      },
    },
  });

// const ArtistGenre = db.define('artistgenre', {});

const Votes = db.define('votes', {});
// one to many relationships
Genre.hasMany(Album);
User.hasMany(Album);
// Genre.hasMany(Artist);

// many to many relationships
Album.belongsToMany(Tag, { through: 'albumtags' });
Tag.belongsToMany(Album, { through: 'albumtags' });

Artist.belongsToMany(Genre, { through: 'artistgenre' });
Genre.belongsToMany(Artist, { through: 'artistgenre' });

User.belongsToMany(Album, { through: 'votes' });
Album.belongsToMany(User, { through: 'votes' });

db.sync({
  force: true,
}).then(() => {
  Genre.create({
    title: 'Jazz',
  });
  Genre.create({
    title: 'R&B',
  });
  Genre.create({
    title: 'Blues',
  });
  Artist.create({
    name: 'Eddie Lang',
  }).then((artist) => {
    artist.setGenres([1]);
  });
  Artist.create({
    name: 'Ernest Ranglin',
  }).then((artist) => {
    artist.setGenres([1]);
  });
  Artist.create({
    name: 'Sam & Dave',
  }).then((artist) => {
    artist.setGenres([2, 3]);
  });
  Artist.create({
    name: 'Solange',
  }).then((artist) => {
    artist.setGenres([2]);
  });
  Artist.create({
    name: 'Rev. Gary Davis',
  }).then((artist) => {
    artist.setGenres([3]);
  });
  Artist.create({
    name: 'Henry Thomas',
  }).then((artist) => {
    artist.setGenres([3]);
  });
  Artist.create({
    name: 'Elizabeth Cotten',
  }).then((artist) => {
    artist.setGenres([3]);
  });
  User.create({
    email: 'f.macconnell@gmail.com',
    password: 'password',
  });
  Album.create({
    title: 'Pioneer of Jazz Guitar',
    description: '1927-1939 acoustic jazz guitar',
    link: 'https://www.youtube.com/watch?v=K1Kw8L6rYt0',
  });
  Album.create({
    title: 'Jazz Jamaica',
    description: 'Jamaican Jazz Guitar',
    link: 'https://www.youtube.com/watch?v=KFwQithLUok&list=PLDnvLPkzDsWxCV2SpzEiloi7Fprj_a_0u',
  });
  Album.create({
    title: 'Soul Men',
    description: '1967 R&B soul duo',
    link: 'https://www.youtube.com/watch?v=ZVx2i6jGzf8',
  });
  Album.create({
    title: 'A Seat At The Table',
    description: 'American Singer Songwriter',
    link: 'https://www.youtube.com/watch?v=ZltxY1iIyPs',
  });
  Album.create({
    title: 'Harlem Street Singer',
    description: '1960\'s fingerstyle guitar',
    link: 'https://www.youtube.com/watch?v=ygDs_pkEHDs',
  });
  Album.create({
    title: 'Texas Worried Blues',
    description: 'Pre War Country Blues',
    link: 'https://www.youtube.com/watch?v=aSBkcBpLnzY',
  });
  Album.create({
    title: 'Shake Sugaree',
    description: '1960\'s fingerstyle guitar',
    link: 'https://www.youtube.com/watch?v=MjCmp1gt5o8',
  });
});
Votes.bulkCreate([
  {
    albumId: 1,
    userId: 1,
  },
  {
    albumId: 1,
    userId: 3,
  },
  {
    albumId: 2,
    userId: 1,
  },
  {
    albumId: 2,
    userId: 3,
  },
  {
    albumId: 2,
    userId: 4,
  },
  {
    albumId: 2,
    userId: 2,
  },
  {
    albumId: 3,
    userId: 1,
  },
  {
    albumId: 3,
    userId: 2,
  },
  {
    albumId: 3,
    userId: 3,
  },
  {
    albumId: 3,
    userId: 4,
  },
  {
    albumId: 3,
    userId: 5,
  },
  {
    albumId: 3,
    userId: 6,
  },
  {
    albumId: 3,
    userId: 7,
  },
]);

module.exports = {
  Genre,
  Artist,
  Album,
  User,
};
