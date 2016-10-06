import React, { PureComponent } from 'react';
import styles from './style.css';
// import data from '../../data.js';
import Post from '../Post';
import { connect } from 'react-redux';


class PostList extends PureComponent {
  render() {
    // const correctPost = data.posts.filter((post) => this.props.params.lessonId === post.id);
    return (
      <div className={styles.postListContainer}>
         {/* {correctPost.map((post, index) => (<Post post={post} key={index} />))} */}
         {this.props.posts.map((post, index) => (<Post post={post} key={index} />))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
});

const mapDispatchToProps = { };

export default connect(mapStateToProps, mapDispatchToProps)(PostList);


// PostList.propTypes = {
//   params: PropTypes.object.isRequired,
// };

