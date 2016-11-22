import React from 'react';
import style from './style.css';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';

const white = {
  color: 'white',
};

const HeaderBar = () => (

  <AppBar
    className={style.fixedHeader}
    title={<span>HEARDit</span>}
    iconElementRight={
      <div>
        <Link to={'/albums/new'}><FlatButton label="New Album" style={white} /></Link>
        <Link to={'/login'}><FlatButton label="Log Out" style={white} /></Link>
      </div>}
  />
);

export default HeaderBar;
