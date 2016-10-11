import React, { PropTypes } from 'react';
import styles from './style.css';
// import Chip from 'material-ui/Chip';
import Card from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Post = ({ post, voteUp }) => (
  <Card className={styles.postContainer}>
    <a href=""><h3>{post.title}</h3></a>
    <p>{post.description}</p>
      {/* {post.lessons.map((lesson, index) => (<Chip key={index}>{lesson}</Chip>))} */}
    <FlatButton label={`${post.votes} Votes`} primary onClick={voteUp.bind(this, post.id)} />
  </Card>
);

Post.propTypes = {
  post: PropTypes.object.isRequired,
  voteUp: PropTypes.func.isRequired,
};

export default Post;
