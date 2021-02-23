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
    const component = shallow(<TripSummary cost={expectedCost} days={expectedDays} />);
    expect(component.find('.details span').at(0).text()).toEqual(`${expectedDays} days`);
    expect(component.find('.details span').at(1).text()).toEqual(`from ${expectedCost}`);
  });



  it('should render array of tags', () => {
    const expectedTags = ['books', 'films', 'kings'];
    const component = shallow(<TripSummary tags={expectedTags} />);
    expect(component.find('.tags span').at(0).text()).toEqual('books');
    expect(component.find('.tags span').at(1).text()).toEqual('films');
    expect(component.find('.tags span').at(2).text()).toEqual('kings');
  });
  it('shouldnt render div if there is no tags', () => {
    const component = shallow(<TripSummary  tags={[]} />);
    expect(component.find('.tags')).toEqual(null || {});
  });
});
