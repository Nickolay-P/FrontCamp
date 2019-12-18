import React from 'react';
import ResultsItem from './ResultsItem';
import {shallow, mount} from 'enzyme';
import { RESPONSE_MOCK_DATA } from '../../constants';

describe('ResultsItem component', () => {
    let filmData;
    let clickHandler;

    beforeAll(() => {
        filmData = RESPONSE_MOCK_DATA.data[0];
    });

    it('should be rendered correctly', () => {
        const component = shallow(<ResultsItem data={filmData} />);
        expect(component).toMatchSnapshot();
    });

    it('should be mounted correctly', () => {
        clickHandler = jest.fn();
        const component = mount(<ResultsItem data={filmData} onClick={clickHandler} />);
        component.find('#results-item-' + filmData.id).simulate('click');
        expect(clickHandler).toHaveBeenCalled();
    });
})
