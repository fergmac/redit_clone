import React from 'react';
import styles from '../../../web.browser/styles/shared.css';
import { List, ListItem } from 'material-ui/List';
import Chip from 'material-ui/Chip';
import Paper from 'material-ui/Paper';

const Post = ({ data }) => (
  <Paper>
  <div className={styles.post}>
    <h1>{data.title}</h1>
    <p>{data.description}</p>
    <p>{data.vote}</p>
    <List>
    {data.posts.map((post, index) => (<ListItem key={index}>{post}</ListItem>))}
    </List>
  </div>
  </Paper>
);

Post.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Post;
