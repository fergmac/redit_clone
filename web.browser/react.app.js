import React from 'react';
import ReactDOM from 'react-dom';
import store from '../shared/redux/store.js';
import { voteUpSort } from '../shared/redux/modules/posts.js';
import { Provider } from 'react-redux';

import {
   Router,
   Route,
   IndexRoute,
   browserHistory,
} from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './styles/theme';
import Layout from '../shared/components/Layout';
import App from '../shared/containers/App';
import Welcome from '../shared/components/Welcome';
import LoginForm from '../shared/components/LoginForm';
import CreatePost from '../shared/components/CreatePost';
// import Categories from '../shared/components/Categories';
// import Week from '../shared/components/Week';
import PostList from '../shared/components/PostList';
// import Post from '../shared/components/Post';
// Needed for onTouchTap (Material UI)
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

store.dispatch(voteUpSort(1));

ReactDOM.render(
  // store={store} gives us access to the store everywhere
  <Provider store={store} >
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <Route component={App}>
            <IndexRoute component={Welcome} />
            <Route path="login" component={LoginForm} />
            <Route path="posts" >
              <Route path="new" component={CreatePost} />
              <Route path=":lessonId" component={PostList} />
            </Route>
          </Route>
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('react-app')
);
