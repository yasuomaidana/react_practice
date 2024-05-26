import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import RegisterModal from './RegisterModal';



test('renders the modal with the correct title', () => {
    render(<RegisterModal open={true} handleClose={() => {}} handleLoginOpen={() => {}} />);
    const registerButton = screen.getByRole('button', { name: /register/i });
    expect(registerButton).toBeInTheDocument();
});

test('renders the username input field', () => {
    render(<RegisterModal open={true} handleClose={() => {}} handleLoginOpen={() => {}} />);
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
});

test('renders the email input field', () => {
    render(<RegisterModal open={true} handleClose={() => {}} handleLoginOpen={() => {}} />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
});

test('renders the password input field', () => {
    render(<RegisterModal open={true} handleClose={() => {}} handleLoginOpen={() => {}} />);
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
});

test('calls the handleClose function when the close button is clicked', () => {
    const handleClose = jest.fn();
    render(<RegisterModal open={true} handleClose={handleClose} handleLoginOpen={() => {}} />);
    const closer = screen.getByTestId('closer')
    fireEvent.click(closer);
    expect(handleClose).toHaveBeenCalledTimes(1);
});

test('calls the handleLoginOpen function when the login button is clicked', () => {
    const handleLoginOpen = jest.fn();
    render(<RegisterModal open={true} handleClose={() => {}} handleLoginOpen={handleLoginOpen} />);
    const loginButton = screen.getByText('Already have an account? Login');
    fireEvent.click(loginButton);
    expect(handleLoginOpen).toHaveBeenCalledTimes(1);
});