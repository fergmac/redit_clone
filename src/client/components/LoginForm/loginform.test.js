/* eslint-disable */
import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import LoginForm from './index';
import { Provider } from 'react-redux';
import store from '../../store';


describe('LoginForm', () => {
    const userData = {
        
    }
    it('creates a new user', () => {
       const wrapper = shallow(
           <Provider store={store}>
                <LoginForm 
                    // album={albumData}
                />
          </Provider>
       )
        expect(shallowToJson(wrapper)).toMatchSnapshot()
    })
})