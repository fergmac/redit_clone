import React, { PropTypes } from 'react';
import Divider from 'material-ui/Divider';
import styles from './style.css';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { Link } from 'react-router';

const Week = ({ week }) => (

  <div className={styles.week}>
    <Subheader>{week.title}</Subheader>
    <Divider />
    <List>
      {week.categories.map((category, index) => (
        <ListItem key={index}>
          <Link to={`/posts/${week.id}`} className={styles.links}>
            {category}
          </Link>
        </ListItem>))}
    </List>
  </div>
);

Week.propTypes = {
  week: PropTypes.object.isRequired,
};

export default Week;
