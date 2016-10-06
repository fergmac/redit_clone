import React, { PureComponent } from 'react';
import styles from './style.css';
import Paper from 'material-ui/Paper';
import Post from '../Post';
import { connect } from 'react-redux';
import { voteUp, sortByPopularity } from '../../redux/modules/posts.js';
import { bindActionCreators } from 'redux';
import FlatButton from 'material-ui/FlatButton';


class PostList extends PureComponent {
  render() {
    const truth = true;
    const { posts, params } = this.props;
    const correctPost = posts.filter((post) => parseInt(params.lessonId, 10) === post.id);
    return (
      <div className={styles.postListContainer}>
         {correctPost.map((post) => (
           <Paper key={post.id} className={styles.postContainer} >
             <Post post={post} />
             <FlatButton label="Votes" primary={truth} onClick={this.props.voteUp}>
              {post.votes}
             </FlatButton>
           </Paper>))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
});

// const mapDispatchToProps = dispatch => ({
//    dispatch(voteUp)
// });

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, voteUp, sortByPopularity), dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);


// PostList.propTypes = {
//   params: PropTypes.object.isRequired,
// };

