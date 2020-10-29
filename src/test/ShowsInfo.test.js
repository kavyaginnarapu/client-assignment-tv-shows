import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import ShowsInfo from '../Components/showsComponents/ShowsInfo';

describe("ShowsInfo component", () => {
  it("should render my component", () => {
    const wrapper = shallow(<ShowsInfo />);
  });
  it('should call methodName during componentDidMount', () => {
      const defaultProps ={
          location: {
              pathname:'/showsinfo/58'
          }
      }
      
    const props = {...defaultProps}
    const methodNameFake = jest.spyOn(ShowsInfo.prototype, 'componentDidMount');
    const wrapper = mount(<ShowsInfo {...props} />);
    expect(methodNameFake).toHaveBeenCalledTimes(1);
  });
});
