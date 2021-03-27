import React from 'react';
import { shallow } from 'enzyme';
import DaysToSummer from './DaysToSummer';

const select = {
  description: '.description',
};




const trueDate = Date;
const mockDate = customDate => class extends Date {
  constructor(...args) {
    if (args.length) {
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now() {
    return (new Date(customDate)).getTime();
  }
};

const checkDescriptionDay = (day, expectedDescription) => {
  it(`should show correct at ${day}`, () => {
    global.Date = mockDate(`${day}T12:00:00.135Z`);

    const component = shallow(<DaysToSummer  />);
    const renderedTime = component.find(select.description).text();
    expect(renderedTime).toEqual(expectedDescription);

    global.Date = trueDate;
  });
};



describe('Component DaysToSummer', () => {
  it('should render without crash', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });

  it('should render description', () => {
    const component = shallow(<DaysToSummer />);
    expect(component.exists(select.description)).toEqual(true);
  });
  
  describe('shouldnt show any days left', () => {
    // const component = shallow(<DaysToSummer />);
    // expect(component.exists(select.description)).toEqual(true);
    checkDescriptionDay('2021-06-26', '');
    checkDescriptionDay('2021-07-26', '');
    checkDescriptionDay('2021-08-26', '');
  });

});

