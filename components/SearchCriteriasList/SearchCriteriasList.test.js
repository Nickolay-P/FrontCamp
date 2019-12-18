import React from 'react';
import SearchCriteriasList from './SearchCriteriasList';
import Button from '../Button';
import { shallow, mount } from 'enzyme';
import { SEARCH_OPTIONS } from '../../constants'; 

describe('SearchCriteriasList component', () => {
    let searchOptions;
    let clickHandler;
    let currentOption;
    let element;

    beforeAll(() => {
        searchOptions = SEARCH_OPTIONS;
        clickHandler = jest.fn();
        currentOption = SEARCH_OPTIONS[0];
        element = (<SearchCriteriasList
            options={searchOptions}
            changeHandler={clickHandler}
            currentOption={currentOption}
        />);
    });

    it('should be rendered correctly', () => {
        const component = shallow(element);
        expect(component).toMatchSnapshot();
    });

    it('should mount all options', () => {
        const component = mount(element);
        expect(component.find(Button).length).toBe(SEARCH_OPTIONS.length);
    });

    it('should trigger onChange handler on changes', () => {
        const component = mount(element);
        component.find(Button).first().simulate('click');
        expect(clickHandler).toHaveBeenCalledWith(SEARCH_OPTIONS[0]);
    });
})
