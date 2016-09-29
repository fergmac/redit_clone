import React, {Component, PropType} from 'react';
import styles from '../../../web.browser/styles/shared.css';
import data from '../../data.js';
import Post from '../Post.js';
import AppBar from 'material-ui/AppBar';

class PostList extends Component {
  render() {

    const  { data } = this.props;
    
    return (
      <div className={styles.post}>
        <h1>{post.title}</h1>
          <ul>
            {data.posts.map((post, index) => (<Post post={post} key={index}/>))}
          </ul>
      </div>
    );
  }
}

PostList.propTypes = {

post: PropTypes.element.isRequired

};

export default PostList;
