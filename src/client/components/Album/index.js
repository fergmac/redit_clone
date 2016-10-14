import React, { PropTypes } from 'react';
import styles from './style.css';
// import Chip from 'material-ui/Chip';
import Card from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
// import { Link } from 'react-router';

// was post
const Album = ({ album, voteUp }) => (
  <Card className={styles.albumContainer}>
    {/* <Link to={album.link}><h3>{album.title}</h3></Link> */}
    <a href="'`${album.link}`'"><h3>{album.title}</h3></a>
    <p>{album.description}</p>
      {/* {post.lessons.map((lesson, index) => (<Chip key={index}>{lesson}</Chip>))} */}
    <FlatButton label={`${album.votes} Votes`} primary onClick={voteUp.bind(this, album.id)} />
  </Card>
);

Album.propTypes = {
  album: PropTypes.object.isRequired,
  voteUp: PropTypes.func.isRequired,
};

export default Album;
