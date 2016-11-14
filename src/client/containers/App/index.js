import React, { PureComponent } from 'react';
import Artists from '../../components/Artists';
// import styles from './styles.css';
import { connect } from 'react-redux';
import { fetchGenres } from '../../../shared/redux/modules/genres';

const styles = {
  viewContainer: {
    fontFamily: 'Roboto, sans-serif',
    minHeight: '100vh',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    div: {
      flex: '1',
    },
  },
};

class App extends PureComponent {

  componentDidMount() {
    this.props.fetchGenres();
  }

  render() {
    return (
      <div>
        <Artists />
        <div className={styles.viewContainer}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchGenres: () => {
    dispatch(fetchGenres());
  },
});

export default connect(null, mapDispatchToProps)(App);
