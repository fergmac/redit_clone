import React from 'react';
import Categories from '../../components/Categories';
import styles from './styles.css';


const App = (props) => (
  <div>
    <Categories />
    <div className={styles.viewContainer}>
      {props.children}
    </div>
  </div>
);

App.propTypes = {
  children: React.PropTypes.object,
};

export default App;

