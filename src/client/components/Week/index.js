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
      {week.lessons.map((lesson) => (
        <Link to={`/posts/${lesson.id}`} key={lesson.id}>
          <ListItem className={styles.links}>
            {lesson.name}
          </ListItem>
        </Link>))}
    </List>
  </div>
);

Week.propTypes = {
  week: PropTypes.object.isRequired,
};

export default Week;
