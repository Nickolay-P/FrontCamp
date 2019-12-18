import React from 'react';
import ResultsSort from './ResultsSort';
import ResultsSortList from '../ResultsSortList';
import { shallow, mount } from 'enzyme';
import { SORT_OPTIONS } from '../../constants';

describe('ResultsSort component', () => {
    let currentOption;
    let clickHandler;
    let element;

    beforeAll(() => {
        currentOption = SORT_OPTIONS[0];
        clickHandler = jest.fn();
        element = (<ResultsSort
            currentSortCriteria={currentOption}
            changeSortHanler={clickHandler}
        />)
    });

    it('should be rendered correctly', () => {
        const component = shallow(element);
        expect(component).toMatchSnapshot();
    });

    it('should countain span with proper wording', () => {
        const component = mount(element);
        expect(component.find('span > span').text()).toEqual('Sort by:');
    });

    it('should countain ResultsSortList', () => {
        const component = mount(element);
        expect(component.find(ResultsSortList).exists()).toBe(true);
    });
})
