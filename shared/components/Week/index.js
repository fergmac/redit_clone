import React, { PropTypes } from 'react';
import Divider from 'material-ui/Divider';
import styles from './style.css';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

const Week = ({ data }) => (

  <div className={styles.week}>
    <Subheader>{data.title}</Subheader>
    <Divider />
    <List>
    {data.categories.map((category, index) => (<ListItem key={index}>{category}</ListItem>))}
    </List>
  </div>
);

Week.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Week;
