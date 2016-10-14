import React, { PureComponent } from 'react';
import styles from './style.css';
import Album from '../Album';
import { connect } from 'react-redux';
import { voteUp, sortByPopularity, sortByNewest, loadAlbums } from '../../../shared/redux/modules/albums';
import FlatButton from 'material-ui/FlatButton';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import { Link } from 'react-router';

// was postList
class AlbumList extends PureComponent {
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
    const { albums, params, voteUps, sortByNew, sortByPop } = this.props;
    // parseInt turns the params from a string into a number
    if (params.albumId) {
      const correctAlbum = albums.filter((album) => parseInt(params.albumId, 10) === album.id);
    // console.log(this.props);
      return (
        <div>
          <Toolbar className={styles.albumToolbar}>
            <ToolbarGroup>
              <ToolbarTitle text="Albums" />
            </ToolbarGroup>
            <ToolbarGroup>
              <ToolbarTitle text="Sort:" />
              <Link>
                <FlatButton label="Newest" primary onClick={sortByNew.bind(this)} />
              </Link>
              {/* <Link to={`/posts/${popular}`} key={popular}> */}
              <Link>
                <FlatButton label="Popular" primary onClick={sortByPop.bind(this)} />
              </Link>
            </ToolbarGroup>
          </Toolbar>
          <div className={styles.albumListContainer}>
              {correctAlbum.map((album) => (<Album album={album} voteUp={voteUps} key={album.id} />))}
          </div>
        </div>
      );
    }
    return (
      <div>
        <Toolbar className={styles.albumToolbar}>
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
        <div className={styles.albumListContainer}>
            {albums.map((album) => (<Album album={album} voteUp={voteUps} key={album.id} />))}
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
  albums: state.albums,
});

const mapDispatchToProps = (dispatch) => ({
  loadAlbums: (albumId) => {
    dispatch(loadAlbums(albumId));
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

export default connect(mapStateToProps, mapDispatchToProps)(AlbumList);
