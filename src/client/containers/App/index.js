import React from 'react';
import AlbumCollection from '../../components/AlbumCollection';
import styles from './styles.css';


const App = (props) => (
  <div>
    <AlbumCollection />
    <div className={styles.viewContainer}>
      {props.children}
    </div>
  </div>
);

App.propTypes = {
  children: React.PropTypes.object,
};

export default App;

