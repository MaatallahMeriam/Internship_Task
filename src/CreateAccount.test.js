import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CreateAccount from './CreateAccount';

test('displays error message for invalid password', () => {
  const { getByPlaceholderText, getByText } = render(<CreateAccount />);

  const passwordInput = getByPlaceholderText('Password');

  fireEvent.change(passwordInput, { target: { value: '12345' } });

  const errorMessage = getByText('Error Message. Learn more');

  expect(errorMessage).toBeInTheDocument();
});
