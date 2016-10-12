import React from 'react';
import Lessons from '../../components/Lessons';
import styles from './styles.css';


const App = (props) => (
  <div>
    <Lessons />
    <div className={styles.viewContainer}>
      {props.children}
    </div>
  </div>
);

App.propTypes = {
  children: React.PropTypes.object,
};

export default App;

