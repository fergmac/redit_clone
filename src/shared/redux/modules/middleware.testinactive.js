// /* eslint-disable */
// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import albums from './albums.js';
// // import * as actions from './modules';
// import { fetchAlbums, loadAlbums, LOAD_ALBUMS, saveAlbum, CREATE_ALBUM } from './albums';
// import nock from 'nock';
// import expect from 'expect'; // You can use any testing library
// import remoteMiddleware from '../../../client/socket/remoteMiddleware';

// const createFakeStore = (fakeData, options) => ({
//   getState() {
//     return Object.assign(fakeData, options);
//   }
// });
// createFakeStore({}, { clientId: '42' });

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);
// const dispatchWithStoreOf = (storeData, options, action) => {
//   let emitted = null; // capture what is emitted by socket
//   let dispatched = null;
//   const dispatch = remoteMiddleware
//           ({ emit: (action, value) => emitted = value }) // socket
//           (createFakeStore(storeData, options)) // store
//           (actionAttempt => dispatched = actionAttempt); // next
//   dispatch(action);
//   return emitted;
// };

// describe('mock middleware', () => {
//   afterEach(() => {
//     nock.cleanAll();
//   });

// it('should dispatch if action has {meta: remote} property', () => {
//   const action = {
//     type: 'LOAD_ALBUMS',
//     meta: { remote: true }
//   };
//   expect(
//     dispatchWithStoreOf({}, { clientId: '42' }, action)
//   ).toEqual({ type: 'LOAD_ALBUMS', clientId: '42'});
// });
// });
