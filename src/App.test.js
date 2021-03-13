import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Form from './components/form/form';
 
Enzyme.configure({ adapter: new Adapter() });


it('calls onSubmit prop function when form is submitted', () => {
  const onSubmitFn = jest.fn();
  console.log(onSubmitFn)
  const wrapper = mount(<Form onSubmit = {onSubmitFn}/>);
  const form = wrapper.find('form');
  form.simulate('submit');
  expect(onSubmitFn).toHaveBeenCalledTimes(1);
});
