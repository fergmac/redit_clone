import React, { PropTypes } from 'react';
import Divider from 'material-ui/Divider';
import styles from './style.css';

const Week = ({ data }) => (

  <div className={styles.week}>
    <h1>{data.title}</h1>
    <Divider />
    <ul>
    {data.categories.map((category, index) => (<li key={index}>{category}</li>))}
    </ul>
  </div>
);

Week.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Week;
