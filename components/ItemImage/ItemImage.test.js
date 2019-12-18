import React from 'react';
import ItemImage from './ItemImage';
import {shallow} from 'enzyme';

describe('ItemImage component', () => {
    let itemSrc;
    let itemAlt;

    beforeAll(() => {
        itemSrc = 'src.jpg';
        itemAlt = 'Alt';
    });

    it('should be rendered correctly', () => {
        const component = shallow(<ItemImage src={itemSrc} alt={itemAlt} />);
        expect(component).toMatchSnapshot();
    });
})
