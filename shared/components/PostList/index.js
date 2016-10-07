import React, { PureComponent } from 'react';
import styles from './style.css';
import Post from '../Post';
import { connect } from 'react-redux';
import { voteUp, sortByPopularity, loadPosts } from '../../redux/modules/posts.js';
import FlatButton from 'material-ui/FlatButton';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
// import { Link } from 'react-router';


class PostList extends PureComponent {

  ComponentWillMount() {
    this.props.loadPosts();
  }
  ComponentDidUpdate() {
    this.props.sortByPopularity();
  }
  render() {
    // variable so i don't have to write this.props in front
    const { posts, params, voteUps, sortByPop } = this.props;
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
            <FlatButton label="Newest" primary />
           {/* <Link to={`/posts/${lesson.id}`} key={lesson.id}><FlatButton label="Popular" primary /></Link> */}
            <FlatButton label="Popular" primary onClick={sortByPop.bind(this)} />
          </ToolbarGroup>
        </Toolbar>
        <div className={styles.postListContainer}>
            {correctPost.map((post) => (<Post post={post} voteUp={voteUps} key={post.id} />))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
});

const mapDispatchToProps = (dispatch) => ({
  loadPosts: (lessonId) => {
    dispatch(loadPosts(lessonId));
  },
  voteUps: (id) => {
    dispatch(voteUp(id));
  },
  sortByPop: () => {
    dispatch(sortByPopularity());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);


// PostList.propTypes = {
//   params: PropTypes.object.isRequired,
// };

