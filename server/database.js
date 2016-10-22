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
  title: { type: Sequelize.String },
});
const Artist = db.define('artists', {
  name: { type: Sequelize.String },
});
const Album = db.define('albums', {
  title: { type: Sequelize.STRING },
  description: { type: Sequelize.STRING },
  link: { type: Sequelize.TEXT },
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
  });
  Artist.create({
    name: 'Ernest Ranglin',
  });
  Artist.create({
    name: 'Sam & Dave',
  });
  Artist.create({
    name: 'Solange',
  });
  Artist.create({
    name: 'Rev. Gary Davis',
  });
  Artist.create({
    name: 'Henry Thomas',
  });
  Artist.create({
    name: 'Elizabeth Cotten',
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
    subscription: '1967 R&B soul duo',
    link: 'https://www.youtube.com/watch?v=ZVx2i6jGzf8',
  });
  Album.create({
    title: 'A Seat At The Table',
    subscription: 'American Singer Songwriter',
    link: 'https://www.youtube.com/watch?v=ZltxY1iIyPs',
  });
  Album.create({
    title: 'Harlem Street Singer',
    subscription: '1960\'s fingerstyle guitar',
    link: 'https://www.youtube.com/watch?v=ygDs_pkEHDs',
  });
  Album.create({
    title: 'Texas Worried Blues',
    subscription: 'Pre War Country Blues',
    link: 'https://www.youtube.com/watch?v=aSBkcBpLnzY',
  });
  Album.create({
    title: 'Shake Sugaree',
    subscription: '1960\'s fingerstyle guitar',
    link: 'https://www.youtube.com/watch?v=MjCmp1gt5o8',
  });
});

module.exports = {
  Genre,
  Artist,
  Album,
  User,
};
