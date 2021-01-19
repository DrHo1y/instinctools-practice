import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { render, unmountComponentAtNode } from 'react-dom';
import { create } from 'react-test-renderer';

import BookerApp from '../App';
import HeaderFirst from '../components/Header/HeaderFirst/HeaderFirst';
import HeaderFirstControl from '../components/Header/HeaderFirst/HederFirstControl';
import HeaderFirstLogo from '../components/Header/HeaderFirst/HeaderFIrstLogo';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing App components', () => {
  test('Should render BookerApp component without crashing', () => {
    const div = document.createElement('div');
    render(<BookerApp />, div);
    unmountComponentAtNode(div);
  });
});
describe('Testing Header component', () => {
  const user = {
    isAuth: true,
    isPartner: true,
    currentUser: {
      name: 'Vladimir',
      userId: '5fdc7eca4085f5139bdbcbb8',
      email: 'sver.vp@gmail.com',
      isPartner: true,
    },
  };
  test('Should match id from props', () => {
    const component = create(
      <HeaderFirst
        id={user.currentUser.userId}
        userName={user.currentUser.name}
        isAuth={user.isAuth}
        isPartner={user.isPartner}
        signoutClickAction={() => {}}
      />
    );
    const instance = component.root;
    expect(instance.findByType(HeaderFirstControl).props.id).toBe('5fdc7eca4085f5139bdbcbb8');
  });
});
describe('q', () => {
  test('should show text', () => {
    const component = shallow(<HeaderFirstLogo />).dive();
    const wrapper = component.find('div');
    expect(wrapper.length).toBe(1);
  });
});
