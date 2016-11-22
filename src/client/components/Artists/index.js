import React, { PureComponent, PropTypes } from 'react';
// import style from './style.css';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import Genre from '../Genre';
import SiteIcon from 'material-ui/svg-icons/av/library-music';
// import data from '../../data.js';
import { connect } from 'react-redux';

// const styles = {
//   albumCollection: {
//     width: '100px',
//     left: '0',
//     backgroundColor: 'darkturquoise !important',
//   },
// };
// was lessons
class Artists extends PureComponent {
  render() {
    return (
      <Drawer>
        <AppBar
          // style={styles.albumCollection}
          title={<span>HEARDit</span>}
          iconElementLeft={
            <IconButton>
              <SiteIcon />
            </IconButton>
            }
        />
          {this.props.genres.map((genre, index) => (<Genre genre={genre} key={index} />))}
      </Drawer>
    );
  }
}

Artists.propTypes = {
  genres: PropTypes.array.isRequired,
  artists: PropTypes.array.isRequired,
};
const mapStateToProps = state => ({
  genres: state.genres,
  artists: state.artists,
});

export default connect(mapStateToProps)(Artists);

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
