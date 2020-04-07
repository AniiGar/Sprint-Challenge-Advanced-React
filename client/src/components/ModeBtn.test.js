import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ModeBtn from './ModeBtn';

it('renders a button with the text Switch Mode', () => {
  const wrapper = rtl.render(
      <ModeBtn />
  );
  console.log(wrapper.debug())
  const element = wrapper.queryByText(/Switch Mode/i);
  expect(element).toBeInTheDocument();
});