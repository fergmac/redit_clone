import React, {Component, PropType} from 'react';
import styles from '../../../web.browser/styles/shared.css';
import data from '../../data.js';
import Post from '../Post.js';
import AppBar from 'material-ui/AppBar';

// const PostList = ({post}) => (
  
//   <li> {post={item} key={index}}</li>
  
// );

class App extends Component {
  render() {

    return (
      <div className={styles.post}>
        <h1>{post.title}</h1>
          <ul>
            {data.posts.map((post, index) => (<PostList post={post} key={index}/>))}
          </ul>
      </div>
    );
  }
}

PostList.propTypes = {

post: PropTypes.element.isRequired

};

export default PostList;
