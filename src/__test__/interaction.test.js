import React from 'react';
/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */
import {
  render,
  fireEvent,
  screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../components/calculator/Calculator';

test('7 multiply by 2 should return 14.', async () => {
  render(<Calculator />);

  fireEvent.click(screen.getByText('7'));
  fireEvent.click(screen.getByText('x', { exact: false }));
  fireEvent.click(screen.getByText('2'));
  fireEvent.click(screen.getByText('='));

  expect(screen.getByTestId('mainScreen').innerHTML).toBe('14');
});
