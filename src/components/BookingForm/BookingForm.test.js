import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import BookingForm from './BookingForm';

// Given: The BookingForm component receives available times as a prop.
const mockAvailableTimes = ["12:00", "13:00", "14:00"];  // You can adjust these mock times as per your app's logic.

test('Guests input field has correct attributes', () => {
    render(
        <Router>
            <BookingForm availableTimes={[]} />
        </Router>
    );

    const guestsInput = screen.getByLabelText("Number of guests");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(guestsInput).toHaveAttribute("placeholder", "10 guests max");
});

test('Renders the BookingForm heading', () => {
    const mockDispatch = jest.fn(); // This creates a mock function

    render(
        <Router>
            <BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />
        </Router>
    );

    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
});

test('Updates times when date is changed', () => {
    const mockDispatch = jest.fn(); // This creates a mock function

    render(
        <Router>
            <BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />
        </Router>
    );

    // Simulating a date change to trigger time options update
    const dateInput = screen.getByLabelText("Choose date");
    fireEvent.change(dateInput, { target: { value: '2023-10-24' } });

    // Capture all time options from the dropdown
    const timeOptions = screen.getAllByTestId("time-option").map(opt => opt.value);

    // 1. Check that we have time options available
    expect(timeOptions.length).toBeGreaterThan(0);

    // 2. Check that the mockAvailableTimes are what's rendered in the dropdown
    expect(timeOptions).toEqual(expect.arrayContaining(mockAvailableTimes));

    // 3. Check that the initially selected time after the date change is one of the times from mockAvailableTimes
    const timeSelect = screen.getByLabelText("Choose time");
    const selectedTime = timeSelect.value;
    expect(mockAvailableTimes).toContain(selectedTime);
});
