/* eslint-disable */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import genres from './genres.js';
// import * as actions from './modules';
import { fetchGenres, LOAD_GENRES } from './genres';
import nock from 'nock';
import expect from 'expect'; // You can use any testing library

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should fetch genres', () => {

    const genres = ['Jazz']

    nock('http://localhost:3000/')
      .get('/')
      .reply(200, { payload: { genres } });

    

    const expectedActions = [
      { type: LOAD_GENRES, meta: { remote: true }, payload: { genres } },
    ];
    const store = mockStore({ genres: [] });
    fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(genres)
    }))

    return store.dispatch(fetchGenres())
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
