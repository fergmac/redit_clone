import React, { PureComponent, PropTypes } from 'react';
import styles from './style.css';
import data from '../../data.js';
import Post from '../Post';
// import AppBar from 'material-ui/AppBar';


class PostList extends PureComponent {
  render() {
    const correctPost = data.posts.filter((post) => this.props.params.lessonId === post.id);
    return (
      <div className={styles.postListContainer}>
          {correctPost.map((post, index) => (<Post post={post} key={index} />))}
      </div>
    );
  }
}
PostList.propTypes = {
  params: PropTypes.object.isRequired,
};

export default PostList;
