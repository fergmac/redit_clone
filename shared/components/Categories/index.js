import React, { PureComponent } from 'react';
import style from './style.css';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import Week from '../Week';
import SiteIcon from 'material-ui/svg-icons/communication/import-contacts';
// import data from '../../data.js';
import { connect } from 'react-redux';

class Categories extends PureComponent {
  render() {
    return (
      <Drawer>
        <AppBar
          className={style.categories}
          title={<span>REDit</span>}
          iconElementLeft={
            <IconButton>
              <SiteIcon />
            </IconButton>
            }
        />
          {this.props.weeks.map((week, index) => (<Week week={week} key={index} />))}
      </Drawer>
    );
  }
}

const mapStateToProps = state => ({
  weeks: state.weeks,
});

export default connect(mapStateToProps)(Categories);

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
