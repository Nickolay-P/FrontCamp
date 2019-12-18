import React from 'react';
import Footer from './Footer';
import {shallow} from 'enzyme';

describe('Footer component', () => {
    it('should be rendered correctly', () => {
        const component = shallow(<Footer />);
        expect(component).toMatchSnapshot();
    });
})
