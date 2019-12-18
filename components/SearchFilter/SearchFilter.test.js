import React from 'react';
import SearchFilter from './SearchFilter';
import Button from '../Button';
import SearchCriteriasList from '../SearchCriteriasList';
import { shallow, mount } from 'enzyme';
import { SEARCH_OPTIONS } from '../../constants';

describe('SearchFilter component', () => {
    let searchOptions;
    let currentOption;
    let clickHandler;
    let element;

    beforeAll(() => {
        searchOptions = SEARCH_OPTIONS;
        currentOption = SEARCH_OPTIONS[0];
        clickHandler = jest.fn();
        element = (<SearchFilter
            options={searchOptions}
            currentOption={currentOption}
            changeHandler={clickHandler}
        />)
    });

    it('should be rendered correctly', () => {
        const component = shallow(element);
        expect(component).toMatchSnapshot();
    });

    it('should countain span with proper wording', () => {
        const component = mount(element);
        expect(component.find('span').text()).toEqual('Search by ');
    });

    it('should countain Button', () => {
        const component = mount(element);
        expect(component.find(Button).exists()).toBe(true);
        expect(component.find(Button).last().props().customClass).toEqual('buttonAction');
    });

    it('should countain SearchCriteriasList', () => {
        const component = mount(element);
        expect(component.find(SearchCriteriasList).exists()).toBe(true);
    });
})
