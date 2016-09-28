import React, {Component, PropType} from 'react';
import styles from '../../../web.browser/styles/shared.css';

const PostList = ({postList}) => (
  
  <li> {postList={item} key={index}}</li>
  
);

class App extends Component {
  render() {
    const postList = [{post}];

    return (
      <div className={styles.postList}>
        <h1>Post List</h1>
          <ul>
            {postList.map((item, index) => (<PostList postList={item} key={index}/>))}
          </ul>
      </div>
    );
  }
}

PostList.propTypes = {

post: PropTypes.element.isRequired

};

export default PostList;
