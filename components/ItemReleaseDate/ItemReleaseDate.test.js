import React from 'react';
import ItemReleaseDate from './ItemReleaseDate';
import { shallow } from 'enzyme';

describe('ItemReleaseDate component', () => {
    let releaseDate;

    beforeAll(() => {
        releaseDate = '1995-01-01';
    });

    it('should be rendered correctly', () => {
        const component = shallow(<ItemReleaseDate releaseDate={releaseDate} />);
        expect(component).toMatchSnapshot();
    });
})
