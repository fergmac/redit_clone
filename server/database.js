const Sequelize = require('sequelize');


const db = new Sequelize('redit3', 'fergusmacconnell', 'postgres', {
  dialect: 'postgres',
  host: 'localhost',
  pool: {
    max: 5,
    min: 1,
    idle: 10000,
  },
});

const Album = db.define('albums', {
  title: { type: Sequelize.STRING },
  description: { type: Sequelize.STRING },
  link: { type: Sequelize.TEXT },
});

db.sync({
  force: true,
}).then(() => {
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
  Album,
};
