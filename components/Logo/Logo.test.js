import React from 'react';
import Logo from './Logo';
import {shallow} from 'enzyme';

describe('Logo component', () => {
    it('should be rendered correctly', () => {
        const component = shallow(<Logo />);
        expect(component).toMatchSnapshot();
    });
})
