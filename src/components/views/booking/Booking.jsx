import React, { useState } from 'react';
import BookingForm from './BookingForm';
import './Booking.css';
import axios from 'axios';

const Booking = () => {
    const [bookingData, setBookingData] = useState({
        name: '',
        email: '',
        date: '',
        location: '',
        time: ''
    });
    const [availableTimes, setAvailableTimes] = useState([]);
    const [confirmationMessage, setConfirmationMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookingData({ ...bookingData, [name]: value });
    };

    const fetchAvailableTimes = async (date, location) => {
        try {
            const response = await axios.get('https://localhost:7011/api/bookings/available-times', {
                params: { date, location }
            });
            setAvailableTimes(response.data);
        } catch (error) {
            console.error('Error fetching available times:', error);
            setAvailableTimes([]);
        }
    };

    const handleDateChange = async (date) => {
        setBookingData(prevState => ({ ...prevState, date }));
        if (bookingData.location) {
            await fetchAvailableTimes(date, bookingData.location);
        }
    };

    const handleLocationChange = async (location) => {
        setBookingData(prevState => ({ ...prevState, location }));
        if (bookingData.date) {
            await fetchAvailableTimes(bookingData.date, location);
        }
    };

    const handleTimeChange = (time) => {
        setBookingData(prevState => ({ ...prevState, time }));
    };

    const handleBookingSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://localhost:7011/api/bookings', bookingData);
            console.log('Booking confirmed:', response.data);

            // Display confirmation message
            setConfirmationMessage(`Booking confirmed for ${bookingData.date} at ${bookingData.location}`);

            // Clear form fields
            setBookingData({
                name: '',
                email: '',
                date: '',
                location: '',
                time: ''
            });
            setAvailableTimes([]);
        } catch (error) {
            console.error('Error creating booking:', error);
        }
    };

    return (
        <div className="booking-container">
            <h2 className="booking-header">FellowBots Simulator Booking</h2>
            <p className="booking-description">The future of driving licenses</p>
            <div className="booking-form-container">
                <BookingForm
                    bookingData={bookingData}
                    onInputChange={handleInputChange}
                    onDateChange={handleDateChange}
                    onLocationChange={handleLocationChange}
                    onTimeChange={handleTimeChange}
                    onBookingSubmit={handleBookingSubmit}
                    availableTimes={availableTimes}
                />
            </div>
            {confirmationMessage && (
                <div className="confirmation-popup">
                    {confirmationMessage}
                    <button onClick={() => setConfirmationMessage('')}>Close</button>
                </div>
            )}
        </div>
    );
};

export default Booking;
