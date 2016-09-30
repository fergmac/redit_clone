import React, { PureComponent } from 'react';
import styles from './style.css';
import data from '../../data.js';
import Post from '../Post';
// import AppBar from 'material-ui/AppBar';


class PostList extends PureComponent {
  render() {
    return (
      <div className={styles.postListContainer}>
          {data.posts.map((post, index) => (<Post post={post} key={index} />))}
      </div>
    );
  }
}

export default PostList;
