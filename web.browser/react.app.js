import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './styles/theme';

import Layout from '../shared/components/Layout';
import App from '../shared/containers/App';
import Welcome from '../shared/components/Welcome';
// import LoginForm from '../shared/components/LoginForm';
// import CreatePost from '../shared/components/CreatePost';
import Categories from '../shared/components/Categories';
// import Week from '../shared/components/Week';
// import PostList from '../shared/components/PostList';
// import Post from '../shared/components/Post';
// Needed for onTouchTap (Material UI)
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Layout>
      <App>
        <Categories />
        <Welcome />
      </App>
    </Layout>
  </MuiThemeProvider>,
  document.getElementById('react-app')
);
