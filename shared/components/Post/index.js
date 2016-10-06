import React, { PropTypes } from 'react';
// import styles from './style.css';
// import Chip from 'material-ui/Chip';
// import Paper from 'material-ui/Paper';

const Post = ({ post }) => (
  <div>
    <a href=""><h3>{post.title}</h3></a>
    <p>{post.description}</p>
      {/* <button>{post.votes}</button> */}
   {/* {post.lessons.map((lesson, index) => (<Chip key={index}>{lesson}</Chip>))} */}
  </div>

);

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
