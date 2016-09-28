import React from 'react';
import style from './style.css';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const white = {
  color: 'white',
};

const HeaderBar = () => (

  <AppBar
    className={style.fixedHeader}
    title={<span>REDit</span>}
    iconElementRight={
      <div>
        <FlatButton label="New Post" style={white} />
        <FlatButton label="Log Out" style={white} />
      </div>}
  />
);

export default HeaderBar;
