import React from 'react';
import style from './style.css';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import CommunicationImportContacts from 'material-ui/svg-icons/communication/import_contacts';
import FontIcon from 'material-ui/FontIcon';
// import Data from '../../data.js';

const Categories = () => (
  <Drawer>
    <FontIcon className="material-icons" style={iconStyles}>home</FontIcon>
    <AppBar
      className={style.categories}
      title={<span>REDit</span>}
      iconElementLeft={
        <IconButton>
          <CommunicationImportContacts style={iconStyles} color={white500} />
        </IconButton> 
     }
    />
    <MenuItem>React</MenuItem>
    <MenuItem>React Router</MenuItem>
    <MenuItem>React - Props & State</MenuItem>
  </Drawer>
);

export default Categories;

