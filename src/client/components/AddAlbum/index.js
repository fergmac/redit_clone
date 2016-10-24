import React, { PureComponent } from 'react';
import styles from './style.css';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { saveAlbum } from '../../../shared/redux/modules/albums';
import Card from 'material-ui/Card';
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
    const { handleSubmit } = this.props;
    return (
      <div className={styles.addAlbum}>
        <Card className={styles.addAlbumCard}>
          <h3>Add Album Page</h3>
          <form onSubmit={handleSubmit}>
            <Field
              name="title"
              component="input"
              type="text"
              placeholder="Title"
            />
            <Field
              name="artist"
              component="input"
              type="text"
              placeholder="Artist"
            />
            <Field
              name="genre"
              component="input"
              type="text"
              placeholder="Genre"
            />
            <Field
              name="description"
              component="input"
              type="text"
              placeholder="Description"
            />
            <Field
              name="link"
              component="input"
              type="text"
              placeholder="Link"
            />
            <Field
              name="tags"
              component="input"
              type="text"
              placeholder="Tags"
            />
            <button type="submit">Submit</button>
          </form>
        </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'addalbum',
})(AddAlbum));

