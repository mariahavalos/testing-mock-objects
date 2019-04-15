import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import MyProgress from '../src/components/progress-bar';

//mocks the progress bar component and calls the getValue function to verify value of progress bar
it ('should be at the correct value of progress given a friends list', () => {
    const friendsList = ['a', 'b', 'c']
    let wrapper = shallow(<MyProgress friendsList={friendsList}/>);

    const progress = wrapper.instance().getValue()
    wrapper.update()
    expect(progress).toEqual(60);
});

it ('should start at 0', () => {
    const friendsList = []
    let wrapper = shallow(<MyProgress friendsList={friendsList}/>);

    const progress = wrapper.instance().getValue()
    wrapper.update()
    expect(progress).toEqual(0);
});