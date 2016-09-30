import React, { PureComponent } from 'react';
import styles from '../../../web.browser/styles/shared.css';
import data from '../../data.js';
import Post from '../Post.js';
// import AppBar from 'material-ui/AppBar';


class PostList extends PureComponent {
  render() {
    return (
      <div className={styles.post}>
          {data.posts.map((post, index) => (<Post post={post} key={index} />))}
      </div>
    );
  }
}

export default PostList;
