import React from 'react';
import HeaderBar from '../HeaderBar';

const Layout = props => (
  <div>
    <HeaderBar />
    {props.children}
  </div>
);

Layout.propTypes = {
  children: React.PropTypes.object,
};

export default Layout;
