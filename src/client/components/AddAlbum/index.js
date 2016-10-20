import React, { PureComponent } from 'react';
import styles from './style.css';
import { connect } from 'react-redux';
import { saveAlbum } from '../../../shared/redux/modules/albums';
// was create post

class AddAlbum extends PureComponent {

  componentDidMount() {
    this.props.saveAlbum({
      title: 'ferg',
      description: 'fingerstyle guitar',
      link: 'https://www.youtube.com/watch?v=ygDs_pkEHDs',
    });
  }
  render() {
    return (
      <div className={styles.addAlbum}>
        <h1>Add Album Page</h1>
      </div>
      );
  }
}

const mapStateToProps = state => ({
  albums: state.albums,
});

const mapDispatchToProps = (dispatch) => ({
  saveAlbum: (newAlbum) => {
    dispatch(saveAlbum(newAlbum));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddAlbum);

// const addAlbum = () => (
//   <div className={styles.addAlbum}>
//     <h1>Add Album Page</h1>
//   </div>
// );

// export default addAlbum;
