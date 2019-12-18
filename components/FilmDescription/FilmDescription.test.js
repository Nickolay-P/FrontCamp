import React from 'react';
import FilmDescription from './FilmDescription';
import { shallow } from 'enzyme';

describe('FilmDescription component', () => {
    let filmDescr;

    beforeAll(() => {
        filmDescr = 'Some description';
    });

    it('should be rendered correctly', () => {
        const component = shallow(<FilmDescription description={filmDescr} />);
        expect(component).toMatchSnapshot();
    });
})
