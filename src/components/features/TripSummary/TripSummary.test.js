import React from 'react';
import { shallow } from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render proper url adress', () => {
    const expectedId = 'abc';
    const expectedLink = '/trip/abc';
    const component = shallow(<TripSummary id={expectedId} />);
    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });
  it('has img proper src & alt', () => {
    const expectedSrc = 'image.jpg';
    const expectedAlt = 'name';
    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt} />);
    expect(component.find('img').prop('src')).toEqual(expectedSrc);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });
  it('has proper cost&days', () => {
    const expectedCost = 'koszt';
    const expectedDays = 17;
    const component = shallow(<TripSummary  cost={expectedCost} days={expectedDays} />);
    expect(component.find('.details span').first().text()).toEqual(`${expectedDays} days`);
    expect(component.find('.details span').last().text()).toEqual(`from ${expectedCost}`);
  });
  it('should throw error when not every required prop is given', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
});
