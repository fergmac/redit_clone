import React, { PureComponent } from 'react';
import styles from './style.css';
import Post from '../Post';
import { connect } from 'react-redux';
import { voteUp, sortByPopularity, sortByNewest, loadPosts } from '../../../shared/redux/modules/posts.js';
import FlatButton from 'material-ui/FlatButton';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import { Link } from 'react-router';


class PostList extends PureComponent {
  constructor(sortType = null) {
    super();
    this.sortType = sortType;
  }

  // componentWillMount() {
  //   // dispatch sort by newest/popular
  //   switch (this.sortType) {
  //     case 'popular':
  //       this.props.loadPosts('popular');
  //       break;
  //     case 'newest':
  //       this.props.loadPosts('newest');
  //       break;
  //     default:
  //       this.props.loadPosts();
  //   }
  // }
  componentDidUpdate() {
    // this.props.sortByPopularity();
  }
  render() {
    // variable so i don't have to write this.props in front
    const { posts, params, voteUps, sortByNew, sortByPop } = this.props;
    // parseInt turns the params from a string into a number
    const correctPost = posts.filter((post) => parseInt(params.lessonId, 10) === post.id);
    // console.log(this.props);
    return (
      <div>
        <Toolbar className={styles.postToolbar}>
          <ToolbarGroup>
            <ToolbarTitle text="Albums" />
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarTitle text="Sort:" />
            <Link>
              <FlatButton label="Newest" onClick={sortByNew.bind(this)} />
            </Link>
            {/* <Link to={`/posts/${popular}`} key={popular}> */}
            <Link>
              <FlatButton label="Popular" onClick={sortByPop.bind(this)} />
            </Link>
          </ToolbarGroup>
        </Toolbar>
        <div className={styles.postListContainer}>
            {correctPost.map((post) => (<Post post={post} voteUp={voteUps} key={post.id} />))}
        </div>
      </div>
    );
  }
}
// function that gets the newest/popular PostList
// export function getPostList(sortType) {
//   switch (sortType) {
//     case 'newest':
//       return new PostList('newest');
//     case 'popular':
//       return new PostList('popular');
//     default:
//       return PostList;
//   }
// }

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
  sortByNew: () => {
    dispatch(sortByNewest());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
