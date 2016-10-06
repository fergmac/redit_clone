import React, { PureComponent } from 'react';
import styles from './style.css';
import Paper from 'material-ui/Paper';
import Post from '../Post';
import { connect } from 'react-redux';
import { voteUp, sortByPopularity } from '../../redux/modules/posts.js';
import { bindActionCreators } from 'redux';
import FlatButton from 'material-ui/FlatButton';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';


class PostList extends PureComponent {
  render() {
    const truth = true;
    const { posts, params } = this.props;
    // parseInt turns the params from a string into a number
    const correctPost = posts.filter((post) => parseInt(params.lessonId, 10) === post.id);
    return (
      <div>
        <Toolbar className={styles.postToolbar}>
          <ToolbarGroup>
            <ToolbarTitle text="Posts" />
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarTitle text="Sort:" />
            <FlatButton label="Newest" primary={truth} />
            <FlatButton label="Popular" primary={truth} />
          </ToolbarGroup>
        </Toolbar>

        <div className={styles.postListContainer}>
            {correctPost.map((post) => (
              <Paper key={post.id} className={styles.postContainer} >
                <Post post={post} />
                <FlatButton label="Votes" primary={truth} onClick={voteUp}>
                {post.votes}
                </FlatButton>
              </Paper>))}
        </div>
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

