import React, { PureComponent } from 'react';
import styles from './style.css';
// import data from '../../data.js';
import Post from '../Post';
import { connect } from 'react-redux';


class PostList extends PureComponent {
  render() {
    const { posts, params } = this.props;
    const correctPost = posts.filter((post) => parseInt(params.lessonId, 10) === post.id);
    return (
      <div className={styles.postListContainer}>
         {correctPost.map((post) => (<Post post={post} key={post.id} />))}
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

