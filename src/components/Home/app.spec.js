import React from 'react';
import {shallow} from 'enzyme';
import Home from './Home.js';



describe('Home components ',()=>{

  it('Load total image',()=>{
    const component=shallow(<Home />);
    const wrapper =component.find=('.imageCarrousel');
    expect(wrapper.length).toBe(15);
  })


});