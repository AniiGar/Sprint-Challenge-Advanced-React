import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PlayerCard from './PlayerCard';

it('renders a div with the text Name', () => {
  const wrapper = rtl.render(
      <PlayerCard />
  );
  console.log(wrapper.debug())
  const element = wrapper.queryByText(/Name/i);
  expect(element).toBeInTheDocument();
});