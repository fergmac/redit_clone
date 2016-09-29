import React, { PropTypes } from 'react';
import styles from '../../../web.browser/styles/shared.css';
import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper';

const Post = ({ post }) => (
  <Paper>
    <div className={styles.post}>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <p>{post.vote}</p>
      {post.categories.map((category, index) => (<Chip key={index}>{category}</Chip>))}
    </div>
  </Paper>
);

Post.propTypes = {
  post: PropTypes.object.isRequired,
};

export default Post;
