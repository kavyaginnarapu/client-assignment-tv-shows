import React from 'react';
import { shallow,mount } from 'enzyme';

import Search from '../searchComponents/Search';

describe("pagination component", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Search />);
  });

  it('simulates click events on search', () => {
    const wrapper = mount(<Search />);
    // console.log("wrapper====search==",wrapper.debug())
  });
});
