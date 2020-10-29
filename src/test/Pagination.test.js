import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Pagination from '../Components/pagination/Pagination';

describe("pagination component", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Pagination totalRecords={100}/>);
  });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    
//    expect(onButtonClick).to.have.property('evt.preventDefault()', 1);
  });
});
