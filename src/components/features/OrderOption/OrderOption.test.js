import React from 'react';
import { shallow } from 'enzyme';
import OrderOption from './OrderOption';
import DatePicker from 'react-datepicker';

describe('Component OrderOption', () => {
  it('should render without crash', () => {
    const component = shallow(<OrderOption type='text' name='Stefan' />);
    expect(component).toBeTruthy();
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

const mockProps = {
  id: 'abc',
  name: 'Lorem',
  values: [
    { id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0 },
    { id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100 },
  ],
  required: false,
  currentValue: 'aaa',
  price: '50%',
  limits: {
    min: 0,
    max: 6,
  },
};

const mockPropsForType = {
  dropdown: {},
  icons: {},
  checkboxes: { currentValue: [mockProps.currentValue] },
  number: { currentValue: 1 },
  text: {},
  date: {},
};

const testValue = mockProps.values[1].id;
const testValueNumber = 3;

for (let type in optionTypes) {
  describe(`Component OrderOption with type=${type}`, () => {
    /* test setup */
    let component;
    let subcomponent;
    let renderedSubcomponent;
    let mockSetOrderOption; /* 1 */

    beforeEach(() => {
      mockSetOrderOption = jest.fn(); /* 2 */
      component = shallow(
        <OrderOption
          type={type}
          setOrderOption={mockSetOrderOption} /* 3 */
          {...mockProps}
          {...mockPropsForType[type]}
        />
      );
      subcomponent = component.find(optionTypes[type]);
      renderedSubcomponent = subcomponent.dive(); //co wlasciwie robi tu find i czym jest subkomponent
    });
    /* common tests */
    it('passes dummy test', () => {
      expect(1).toBe(1);
      // console.log(component.debug());
      // console.log(subcomponent.debug());
      // console.log(renderedSubcomponent.debug());
    });

    it(`renders ${optionTypes[type]}`, () => {
      expect(subcomponent).toBeTruthy();
      expect(subcomponent.length).toBe(1);
    });

    /* type-specific tests */
    switch (type) {
      case 'dropdown': {
        it('contains select and options', () => {
          const select = renderedSubcomponent.find('select');
          expect(select.length).toBe(1);
          const emptyOption = select.find('option[value=""]').length;
          expect(emptyOption).toBe(1);

          const options = select.find('option').not('[value=""]');
          expect(options.length).toBe(mockProps.values.length);
          expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('select').simulate('change', { currentTarget: { value: testValue } });
          expect(mockSetOrderOption).toBeCalledTimes(1); //w jakich przypadkach miałoby być inaczej?
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }

      case 'icons': {
        it('contains div with icons', () => {
          const icon = renderedSubcomponent.find('.icon');
          expect(icon.length).toBe(1);
          const activeIcon = renderedSubcomponent.find('.iconActive');
          expect(activeIcon.length).toBe(1);
        });


        it('should run setOrderOption function on click', () => {
          renderedSubcomponent.find('.icon').simulate('click');
          expect(mockSetOrderOption).toBeCalledTimes(1);
        });
        break;
      }

      case 'checkboxes': {
        it('contains div with inputs', () => {
          const inputs = renderedSubcomponent.find('input[type="checkbox"]');
          expect(inputs.length).toBe(mockProps.values.length);
          expect(inputs.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(inputs.at(1).prop('value')).toBe(mockProps.values[1].id);
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find(`input[value="${testValue}"]`)
            .simulate('change', { currentTarget: { checked: true } });
          expect(mockSetOrderOption).toBeCalledWith({
            [mockProps.id]:[mockProps.currentValue, testValue],
          });
        });
        break;
      }

      case 'number': {
        it('contains div with input', () => {
          //console.log(renderedSubcomponent.debug());
          const number = renderedSubcomponent.find('input[type="number"]');
          expect(number.length).toBe(1);

        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('input').simulate('change', { currentTarget: { value: testValueNumber } });
          expect(mockSetOrderOption).toBeCalledTimes(1); 
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValueNumber });
        });
        break;
      }

      case 'text': {
        it('contains input with text', () => {
          const text = renderedSubcomponent.find('input[type="text"]');
          expect(text.length).toBe(1);
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('input').simulate('change', { currentTarget: { value: testValue } });
          expect(mockSetOrderOption).toBeCalledTimes(1); 
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }

      case 'date': {
        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find(DatePicker).simulate('change', testValue);
          expect(mockSetOrderOption).toBeCalledTimes(1); 
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }
      
    }
  });
}