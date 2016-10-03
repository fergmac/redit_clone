export default {
  weeks: [{
    id: '0',
    title: 'Week 1',
    categories: [
      { name: 'React', id: 1 },
      { name: 'React-Router', id: 2 },
    ],
  }, {
    id: '1',
    title: 'Week 2',
    categories: [
      { name: 'Redux', id: 3 },
      { name: 'Functional Programming', id: 4 },
    ],
  }, {
    id: '2',
    title: 'Week 3',
    categories: [
      { name: 'Node', id: 5 },
      { name: 'Express', id: 6 },
      { name: 'Async', id: 7 },
    ],
  }],
  posts: [{
    id: '0',
    author: 'Mackenzie',
    votes: 0,
    categories: [
      'React',
    ],
    title: 'React!!!!',
    description: 'Some React resource',
    link: '//github.com/react',
  }, {
    id: '1',
    author: 'Shawn',
    votes: 5,
    categories: [
      'React',
    ],
    title: 'React ?',
    description: 'Some React resource',
    link: '//github.com/react',
  }],
};
