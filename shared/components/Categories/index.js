import React from 'react';
import style from './style.css';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Drawer from 'material-ui/Drawer';
import Week from '../Week';
import SiteIcon from 'material-ui/svg-icons/communication/import-contacts';
import data from '../../data.js';


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
    {data.weeks.map((week, index) => <Week data={week} key={index} />)}
  </Drawer>
);

export default Categories;
