import React from 'react';
import Artists from '../../components/Artists';
import styles from './styles.css';


const App = (props) => (
  <div>
    <Artists />
    <div className={styles.viewContainer}>
      {props.children}
    </div>
  </div>
);

App.propTypes = {
  children: React.PropTypes.object,
};

export default App;
