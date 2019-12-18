import React from 'react';
import FilmGenres from './FilmGenres';
import {shallow} from 'enzyme';

describe('FilmGenres component', () => {
    let filmGenres;

    beforeAll(() => {
        filmGenres = ['someGenre1', 'someGenre2'];
    });

    it('should be rendered correctly', () => {
        const component = shallow(<FilmGenres genres={filmGenres} />);
        expect(component).toMatchSnapshot();
    });
})
