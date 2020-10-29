import React from 'react';
import { mount } from 'enzyme';

import ShowsList from '../Components/searchComponents/ShowsList';

describe("shows list component", () => {
  it("should render my component", () => {
    const wrapper = mount(<ShowsList list={[{'score': 13.183079,show:{'id': 123,'name': 'New Girl',
    'image':{'medium': 'http://static.tvmaze.com/uploads/images/medium_portrait/145/364581.jpg'}}}]}/>);
  });
  
});
