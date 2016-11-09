/* eslint-disable */
import React, { PropTypes } from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Genre from '../src/client/components/Genre';


describe('Genre', () => {
    const genreData = {
        id: 1,
        title: 'Jazz',
        artists: [{ id: 1, name: 'Eddie Lang'}]
    }
    it('renders the genres', () => {
       const wrapper = shallow(
                <Genre 
                    genre={genreData}
                />
       )
        expect(shallowToJson(wrapper)).toMatchSnapshot()
    })
})


// describe(?, () => {


//     it('', () => {
//         const ? = ()
//         ? = jest.fn()
//         ?()

//         expect().toBeCalled()
//     })
 
// })