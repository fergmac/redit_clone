import React, { PropTypes } from 'react';
import styles from './style.css';
// import Chip from 'material-ui/Chip';
import Card from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const truth = true;

// const { params, voteUp } = this.props;


const Post = ({ post, voteUp }) => (
  <Card className={styles.postContainer} >
    <a href=""><h3>{post.title}</h3></a>
    <p>{post.description}</p>
      {/* {post.lessons.map((lesson, index) => (<Chip key={index}>{lesson}</Chip>))} */}
    <FlatButton label="Votes" primary={truth} onClick={voteUp.bind(this, post.id)}>
      {post.votes}
    </FlatButton>
  </Card>
   );

Post.propTypes = {
  post: PropTypes.object.isRequired,
  voteUp: PropTypes.func.isRequired,
};

export default Post;
