/* eslint-disable */
import React, { PropTypes } from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Album from './index';


describe('Album', () => {
    const albumData = {
        id: 1,
        title: 'Jazz Guitar',
        description: '1920s acoustic guitar jazz',
        votes: [{ id: 1 }]
    }
    const voteUps = {
        
    }
    it('renders the albums', () => {
       const wrapper = shallow(
                <Album 
                    album={albumData}
                    voteUp={voteUps}
                />
       )
        expect(shallowToJson(wrapper)).toMatchSnapshot()
    })
})
