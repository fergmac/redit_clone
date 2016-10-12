import React from 'react';
import ReactDOM from 'react-dom';
import store from '../store';
import { voteUp, sortByPopularity } from '../../shared/redux/modules/posts';
import { Provider } from 'react-redux';
import '../socket';

import {
   Router,
   Route,
   IndexRoute,
   browserHistory,
} from 'react-router';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiTheme from './styles/theme';
import Layout from '../components/Layout';
import App from '../containers/App';
import Welcome from '../components/Welcome';
import LoginForm from '../components/LoginForm';
import CreatePost from '../components/CreatePost';
import PostList, { getPostList } from '../components/PostList';

// Needed for onTouchTap (Material UI)
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

store.dispatch(voteUp(1));
store.dispatch(sortByPopularity());

ReactDOM.render(
  // store={store} gives us access to the store everywhere
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={browserHistory}>
        <Route path="/" component={Layout}>
          <Route component={App}>
            <IndexRoute component={Welcome} />
            <Route path="login" component={LoginForm} />
            <Route path="posts" >
              <Route path="new" component={CreatePost} />
              <Route path=":lessonId" component={PostList} />
              <Route path="ne  west" component={getPostList('newest')} />
              <Route path="popular" component={getPostList('popular')} />
            </Route>
          </Route>
        </Route>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('react-app')
);
