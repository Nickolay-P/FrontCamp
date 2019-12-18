import React from 'react';
import FilmDetails from './FilmDetails';
import { shallow, mount } from 'enzyme';
import { RESPONSE_MOCK_DATA } from '../../constants';

describe('FilmDetails component', () => {
    let filmData;

    beforeAll(() => {
        filmData = RESPONSE_MOCK_DATA.data[0];
    });

    it('should be rendered correctly', () => {
        const component = shallow(<FilmDetails film={filmData} />);
        expect(component).toMatchSnapshot();
    });

    it('should be mounted correctly', () => {
        const component = mount(<FilmDetails film={filmData} />);
        expect(component).toMatchSnapshot();
    });
})
