import React from 'react';
import ItemGenres from './ItemGenres';
import { shallow } from 'enzyme';

describe('ItemGenre component', () => {
    let itemGenres;

    beforeAll(() => {
        itemGenres = ['a', 'b', 'c'];
    });

    it('should be rendered correctly', () => {
        const component = shallow(<ItemGenres genres={itemGenres} />);
        expect(component).toMatchSnapshot();
    });
})
