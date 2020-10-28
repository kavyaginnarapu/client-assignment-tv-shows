import React from "react";
import { mount, shallow } from "enzyme";
import sinon from 'sinon';
import Button from '@material-ui/core/Button';
import MovieHome from "../movieComponents/MovieHome";
import { MemoryRouter } from 'react-router-dom';

let wrapper;
describe("MovieHome", () => {

  beforeAll(() => {
    global.fetch = jest.fn();
    //window.fetch = jest.fn(); if running browser environment
  });

  beforeEach(() => {
    wrapper = shallow(
      <MemoryRouter>

        <MovieHome />
      </MemoryRouter>,
      { disableLifecycleMethods: true });
  });

  afterEach(() => {
    wrapper.unmount();
  });
  it("renders correctly", () => {
    const wrapper1 = shallow(
      <MemoryRouter>
        <MovieHome />
      </MemoryRouter>

    );
    expect(wrapper1).toMatchSnapshot();
  });
});

it('should call methodName during componentDidMount', () => {
  const methodNameFake = jest.spyOn(MovieHome.prototype, 'componentDidMount');
  const wrapper = shallow(<MovieHome />);
  
  expect(methodNameFake).toHaveBeenCalledTimes(1);
});


it('simulates click events', () => {
  const onButtonClick = sinon.spy();

  const wrapper1 = mount(
    <MemoryRouter>
      <MovieHome />
    </MemoryRouter>

  );
  
  // console.log("wrapper1.debug====",wrapper1.find('div'))
  // const wrapper = mount(<MovieHome />);
  wrapper.find('#Contact-button-submit').simulate('click');
  // console.log("wrapper debug",wrapper.find('button').simulate('click'))


  //const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
  // wrapper.find('button').simulate('click');
  // expect(onButtonClick).to.have.property('callCount', 1);
});

