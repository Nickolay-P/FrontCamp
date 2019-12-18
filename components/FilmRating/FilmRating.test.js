import React from 'react';
import FilmRating from './FilmRating';
import {shallow} from 'enzyme';

describe('FilmRating component', () => {
    let filmRating;

    beforeAll(() => {
        filmRating = 5;
    });

    it('should be rendered correctly', () => {
        const component = shallow(<FilmRating rating={filmRating} />);
        expect(component).toMatchSnapshot();
    });
})
