import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingCalendar from '../BookingCalendar';

// Mock sonner toast
jest.mock('sonner', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

describe('BookingCalendar Component', () => {
  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
  });

  it('renders correctly with all required elements', () => {
    render(<BookingCalendar />);
    
    // Check for calendar navigation
    expect(screen.getByText(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/i)).toBeInTheDocument();
    
    // Check for weekday headers
    weekDaysExist();
    
    // Check for time format toggle
    expect(screen.getByText('12 h')).toBeInTheDocument();
    expect(screen.getByText('24 h')).toBeInTheDocument();
    
    // Check for booking button (should be disabled initially)
    const bookingButton = screen.getByText('Confirm Booking');
    expect(bookingButton).toBeInTheDocument();
    expect(bookingButton).toBeDisabled();
  });

  it('disables the booking button when no date or time is selected', () => {
    render(<BookingCalendar />);
    const bookingButton = screen.getByText('Confirm Booking');
    expect(bookingButton).toBeDisabled();
  });

  it('allows navigation between months', () => {
    render(<BookingCalendar />);
    
    // Get the current month text
    const initialMonthText = screen.getByText(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/i).textContent;
    
    // Click next month button
    const nextButton = screen.getAllByRole('button')[1]; // The second navigation button
    fireEvent.click(nextButton);
    
    // Check if month has changed
    const newMonthText = screen.getByText(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/i).textContent;
    expect(newMonthText).not.toEqual(initialMonthText);
  });
});

// Helper function to check for weekday headers
function weekDaysExist() {
  const weekDays = ['DIM.', 'LUN.', 'MAR.', 'MER.', 'JEU.', 'VEN.', 'SAM.'];
  weekDays.forEach(day => {
    expect(screen.getByText(day)).toBeInTheDocument();
  });
}
