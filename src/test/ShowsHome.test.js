import React from "react";
import { mount, shallow } from "enzyme";
import sinon from 'sinon';
import Button from '@material-ui/core/Button';
import ShowsHome from "../Components/showsComponents/ShowsHome";
import { MemoryRouter } from 'react-router-dom';

let wrapper;
describe("ShowsHome", () => {

  beforeAll(() => {
    global.fetch = jest.fn();
    //window.fetch = jest.fn(); if running browser environment
  });

  beforeEach(() => {
    wrapper = shallow(
      <MemoryRouter>

        <ShowsHome />
      </MemoryRouter>,
      { disableLifecycleMethods: true });
  });

  afterEach(() => {
    wrapper.unmount();
  });
  it("renders correctly", () => {
    const wrapper1 = shallow(
      <MemoryRouter>
        <ShowsHome />
      </MemoryRouter>

    );
    expect(wrapper1).toMatchSnapshot();
  });
});

it('should call methodName during componentDidMount', () => {
  const methodNameFake = jest.spyOn(ShowsHome.prototype, 'componentDidMount');
  const wrapper = shallow(<ShowsHome />);
  
  expect(methodNameFake).toHaveBeenCalledTimes(1);
});


it('simulates click events', () => {
  const onButtonClick = sinon.spy();

  const wrapper1 = mount(
    <MemoryRouter>
      <ShowsHome />
    </MemoryRouter>

  );
  
  // console.log("wrapper1.debug====",wrapper1.find('div'))
  // const wrapper = mount(<ShowsHome />);
  wrapper.find('#Contact-button-submit').simulate('click');
  // console.log("wrapper debug",wrapper.find('button').simulate('click'))


  //const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
  // wrapper.find('button').simulate('click');
  // expect(onButtonClick).to.have.property('callCount', 1);
});

