/* eslint-disable */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import albums from './artists.js';
// import * as actions from './modules';
import { fetchArtists, LOAD_ARTISTS } from './artists';
import nock from 'nock';
import expect from 'expect'; // You can use any testing library

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should fetch artists', () => {

    const artists = ['Eddie Lang']

    nock('http://localhost:3000/')
      .get('/')
      .reply(200, { payload: { albums } });

    

    const expectedActions = [
      { type: LOAD_ARTISTS, meta: { remote: true }, payload: { artists } },
    ];
    const store = mockStore({ artists: [] });
    fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(artists)
    }))

    return store.dispatch(fetchArtists())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
