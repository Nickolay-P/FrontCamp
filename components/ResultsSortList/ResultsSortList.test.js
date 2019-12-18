import React from 'react';
import ResultsSortList from './ResultsSortList';
import ResultsSortOption from '../ResultsSortOption';
import { shallow, mount } from 'enzyme';
import { SORT_OPTIONS } from '../../constants';

describe('ResultsSortList component', () => {
    let sortOptions;
    let currentOption;
    let clickHandler;
    let element;

    beforeAll(() => {
        sortOptions = SORT_OPTIONS;
        currentOption = SORT_OPTIONS[0];
        clickHandler = jest.fn();
        element = (<ResultsSortList
            options={sortOptions}
            currentOption={currentOption}
            changeHandler={clickHandler}
        />)
    });

    it('should be rendered correctly', () => {
        const component = shallow(element);
        expect(component).toMatchSnapshot();
    });

    it('should mount all options', () => {
        const component = mount(element);
        expect(component.find(ResultsSortOption).length).toBe(SORT_OPTIONS.length);
    });

    it('should trigger onChange handler on changes', () => {
        const component = mount(element);
        component.find(ResultsSortOption).first().simulate('click');
        expect(clickHandler).toHaveBeenCalledWith(SORT_OPTIONS[0].field);
    });

   
})
