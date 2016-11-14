/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Artists from './index';
import { Provider } from 'react-redux';
import store from '../../store';


describe('Artists', () => {
    const artistsData = {
        id: 1,
        name: 'Eddie Lang',
    }
    it('renders the artists', () => {
       const wrapper = shallow(
           <Provider store={store}>
                <Artists 
                    artists={artistsData}
                />
          </Provider>
       )
        expect(shallowToJson(wrapper)).toMatchSnapshot()
    })
})