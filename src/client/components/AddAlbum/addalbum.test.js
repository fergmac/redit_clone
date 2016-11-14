/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import AddAlbum from './index';
import { Provider } from 'react-redux';
import store from '../../store';


describe('AddAlbum', () => {
    const albumData = {
        id: 1,
        title: 'Jazz Guitar',
        description: '1920s acoustic guitar jazz',
        votes: [{ id: 1 }]
    }
    it('creates a new Album', () => {
       const wrapper = shallow(
           <Provider store={store}>
                <AddAlbum 
                    album={albumData}
                />
          </Provider>
       )
        expect(shallowToJson(wrapper)).toMatchSnapshot()
    })
})