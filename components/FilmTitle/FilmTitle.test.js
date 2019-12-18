import React from 'react';
import FilmTitle from './FilmTitle';
import {shallow} from 'enzyme';

describe('FilmTitle component', () => {
    let filmTitle;

    beforeAll(() => {
        filmTitle = 'Some Title';
    });

    it('should be rendered correctly', () => {
        const component = shallow(<FilmTitle title={filmTitle} />);
        expect(component).toMatchSnapshot();
    });
})
