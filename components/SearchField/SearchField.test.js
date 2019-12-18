import React from 'react';
import SearchField from './SearchField';
import {shallow, mount} from 'enzyme';

describe('SearchField component', () => {
    let inputValue;
    let changeHandler;

    beforeAll(() => {
        inputValue = 'someSearch';
    });

    it('should be rendered correctly', () => {
        const component = shallow(<SearchField value={inputValue} />);
        expect(component).toMatchSnapshot();
    });

    it('should trigger changeHandler on changes', () => {
        changeHandler = jest.fn();
        const component = mount(<SearchField value={inputValue} onChange={changeHandler} />);
        component.find('input[type="text"]').simulate('change', {target: {value: 'someString'}});
        expect(changeHandler).toHaveBeenCalled();
    });
})
