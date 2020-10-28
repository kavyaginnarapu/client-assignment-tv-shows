import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import MovieInfo from '../movieComponents/MovieInfo';

describe("MovieInfo component", () => {
  it("should render my component", () => {
    const wrapper = shallow(<MovieInfo />);
  });
  it('should call methodName during componentDidMount', () => {
      const defaultProps ={
          location: {
              pathname:'/movieinfo/58'
          }
      }
      
    const props = {...defaultProps}
    const methodNameFake = jest.spyOn(MovieInfo.prototype, 'componentDidMount');
    const wrapper = mount(<MovieInfo {...props} />);
    expect(methodNameFake).toHaveBeenCalledTimes(1);
  });
});
