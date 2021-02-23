import React from 'react';
import { shallow } from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  it('should render without crash', () => {
    const component = shallow(<OrderOption type='text' name='Stefan' />);
    expect(component).toBeTruthy();
    console.log(component.debug()); //dlaczego nic nie wyswietla  
  });
  it('should render empty object if called withoud required props ', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });
  it('should render content of name props ', () => {
    const expectedName = 'Bartosz';
    const component = shallow(<OrderOption name={expectedName} type='text' />);
    const renderedName = component.find('h3.title').text();
    expect(renderedName).toEqual(expectedName);
  });
});




const optionTypes = {
  dropdown: 'OrderOptionDropdown',
  icons: 'OrderOptionIcons',
  checkboxes: 'OrderOptionCheckboxes',
  number: 'OrderOptionNumber',
  text: 'OrderOptionText',
  date: 'OrderOptionDate',
};

for(let type in optionTypes){
  describe(`Component OrderOption with type=${type}`, () => {
    /* test setup */

    /* common tests */
    it('passes dummy test', () => {
      expect(1).toBe(1);
    });

    /* type-specific tests */
    switch (type) {
      case 'dropdown': {
        /* tests for dropdown */
        break;
      }
    }
  });
}