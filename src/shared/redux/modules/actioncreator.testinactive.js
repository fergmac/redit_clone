/* eslint-disable */
import { voteUp, albums } from './albums';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore(albums);

describe('albums', () => {
    it('should dispatch the voteUp action', () => {
  const store = mockStore({ albums: [] });
  const expectedActions = [{
    type: 'VOTE_UP', payload: { id: 1 }
  }];
  store.dispatch(voteUp({ id: 1 }))
    .then(() => { // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
  });
});
});
