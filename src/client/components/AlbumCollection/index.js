import React, { PureComponent } from 'react';
import style from './style.css';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import Genre from '../Genre';
import SiteIcon from 'material-ui/svg-icons/av/library-music';
// import data from '../../data.js';
import { connect } from 'react-redux';
// was lessons
class AlbumCollection extends PureComponent {
  render() {
    return (
      <Drawer>
        <AppBar
          className={style.albumCollection}
          title={<span>HEARDit</span>}
          iconElementLeft={
            <IconButton>
              <SiteIcon />
            </IconButton>
            }
        />
          {this.props.genres.map((genre) => (<Genre genre={genre} key={genre.id} />))}
      </Drawer>
    );
  }
}

const mapStateToProps = state => ({
  genres: state.genres,
});

export default connect(mapStateToProps)(AlbumCollection);

// const Categories = () => (
//   <Drawer>
//     <AppBar
//       className={style.categories}
//       title={<span>REDit</span>}
//       iconElementLeft={
//         <IconButton>
//           <SiteIcon />
//         </IconButton>
//      }
//     />
//     {data.weeks.map((week, index) => (<Week week={week} key={index} />))}
//   </Drawer>
// );
