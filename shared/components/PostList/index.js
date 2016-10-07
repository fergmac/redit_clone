import React, { PureComponent } from 'react';
import styles from './style.css';
import Post from '../Post';
import { connect } from 'react-redux';
import { voteUpSort } from '../../redux/modules/posts.js';
import FlatButton from 'material-ui/FlatButton';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';


class PostList extends PureComponent {

  ComponentWillMount() {
    this.props.sortByPopularity();
  }
  render() {
    const truth = true;
    // variable so i don't have to write this.props in front
    const { posts, params, voteUp } = this.props;
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
            {correctPost.map((post) => (<Post post={post} voteUp={voteUp} key={post.id} />))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
});

const mapDispatchToProps = {
  voteUp: voteUpSort,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);


// PostList.propTypes = {
//   params: PropTypes.object.isRequired,
// };

