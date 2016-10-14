import React, { PropTypes } from 'react';
import Divider from 'material-ui/Divider';
import styles from './style.css';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { Link } from 'react-router';
// was weeks
const Genre = ({ genre }) => (

  <div className={styles.genre}>
    <Subheader>{genre.title}</Subheader>
    <Divider />
    <List>
      {genre.albums.map((album) => (
        <Link to={`/albums/${album.id}`} key={album.id}>
          <ListItem className={styles.links}>
            {album.name}
          </ListItem>
        </Link>))}
    </List>
  </div>
);

Genre.propTypes = {
  genre: PropTypes.object.isRequired,
};

export default Genre;
