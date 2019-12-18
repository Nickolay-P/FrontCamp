import React from 'react';
import ItemTitle from './ItemTitle';
import {shallow, mount} from 'enzyme';

describe('ItemTitle component', () => {
    let itemTitle;

    beforeAll(() => {
        itemTitle = 'Some Title';
    });

    it('should be rendered correctly', () => {
        const component = shallow(<ItemTitle title={itemTitle} />);
        expect(component).toMatchSnapshot();
    });
})
