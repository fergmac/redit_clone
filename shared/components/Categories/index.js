import React from 'react';
import style from './style.css';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import SiteIcon from 'material-ui/svg-icons/communication/import-contacts';
// import FontIcon from 'material-ui/FontIcon';
// import Data from '../../data.js';

const Categories = () => (
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
    <MenuItem>React</MenuItem>
    <MenuItem>React Router</MenuItem>
    <MenuItem>React - Props & State</MenuItem>
  </Drawer>
);

export default Categories;

