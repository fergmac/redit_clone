import React, { PureComponent } from 'react';
import style from './style.css';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import Week from '../Week';
import SiteIcon from 'material-ui/svg-icons/av/library-music';
// import data from '../../data.js';
import { connect } from 'react-redux';

class Lessons extends PureComponent {
  render() {
    return (
      <Drawer>
        <AppBar
          className={style.lessons}
          title={<span>HEARDit</span>}
          iconElementLeft={
            <IconButton>
              <SiteIcon />
            </IconButton>
            }
        />
          {this.props.weeks.map((week) => (<Week week={week} key={week.id} />))}
      </Drawer>
    );
  }
}

const mapStateToProps = state => ({
  weeks: state.weeks,
});

export default connect(mapStateToProps)(Lessons);

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
