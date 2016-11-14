/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import App from './index';
import { Provider } from 'react-redux';
import store from '../../store';


describe('AlbumList', () => {
    const children = {
        
    }
    it('renders App', () => {
       const wrapper = shallow(
           <Provider store={store}>
                <App 
                    
                />
          </Provider>
       )
        expect(shallowToJson(wrapper)).toMatchSnapshot()
    })
})