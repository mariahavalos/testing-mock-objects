import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import MyInput from '../src/components/input';


const handleClickSpy = jest.spyOn(MyInput.prototype, 'newFriend');
const friendsList = []


//mock myinput using pre-fabricated friends list, make sure button can be click
it('is able to click the add button for friends', () => {
  let wrapper = shallow(<MyInput friendsList={friendsList}/>);
  wrapper.find('#button').simulate('click');
  expect(handleClickSpy).toBeCalled();
});

//mock myinput and force value of input to be friend1 by calling .updateInputValue(), expect input to change
it ('is able to add new friends to list', () => {
    let wrapper = shallow(<MyInput friendsList={friendsList}/>);
    wrapper.instance().updateInputValue({'target': {'value': 'friend1'}});
    wrapper.update()
    const input = wrapper.find('#input');
    expect(input.prop('value')).toEqual('friend1');
});

//mock myinput with friends list larger than the max allowed. make sure disabled property is true
it ('should be disabled after 5 friends are added', () => {
    const friendsList = ['a', 'b', 'c', 'd', 'e', 'f']
    let wrapper = shallow(<MyInput friendsList={friendsList}/>);

    const isDisabled = wrapper.instance().isDisabled()
    wrapper.update()
    expect(isDisabled).toEqual(true);
});