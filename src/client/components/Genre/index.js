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
      {genre.artists.map((artist) => (
        <Link to={`/albums/${artist.id}`} key={artist.id}>
          <ListItem className={styles.links}>
            {artist.name}
          </ListItem>
        </Link>))}
    </List>
  </div>
);

Genre.propTypes = {
  genre: PropTypes.object.isRequired,
};

export default Genre;
