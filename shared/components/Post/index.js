import React, { PropTypes } from 'react';
import styles from './style.css';
import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper';

const Post = ({ post }) => (
  <Paper className={styles.postContainer}>
    <div>
      <a href=""><h3>{post.title}</h3></a>
      <p>{post.description}</p>
      <p>{post.votes}</p>
    </div>
    <div>
    {post.categories.map((category, index) => (<Chip key={index}>{category}</Chip>))}
    </div>
  </Paper>

);

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
