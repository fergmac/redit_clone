/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import AlbumList from './index';
import { Provider } from 'react-redux';
import store from '../../store';


describe('AlbumList', () => {
    const albumData = {
        id: 1,
        title: 'Jazz Guitar',
        description: '1920s acoustic guitar jazz',
        votes: [{ id: 1 }]
    }
    it('renders the AlbumList', () => {
       const wrapper = shallow(
           <Provider store={store}>
                <AlbumList 
                    album={albumData}
                />
          </Provider>
       )
        expect(shallowToJson(wrapper)).toMatchSnapshot()
    })
})