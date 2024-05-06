import React, { useState } from 'react';
import BookingForm from './BookingForm';
import './Booking.css';

const Booking = () => {
    // State för att hålla formulärdata
    const [bookingData, setBookingData] = useState({
        name: '',
        email: '',
        date: '',
        location: ''
    });

    // Funktion för att hantera ändringar i formuläret
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookingData({ ...bookingData, [name]: value });
    };

    // Funktion för att hantera bokningsknappens klickhändelse
    const handleBookingSubmit = (e) => {
        e.preventDefault();
        // Här kan du skicka bokningsdata till backend och hantera resultatet
        console.log('Bokningsdata:', bookingData);
        // Återställ formuläret efter att bokningen är skickad
        setBookingData({
            name: '',
            email: '',
            date: '',
            location: ''
        });
    };

    return (
        <div className="booking-container">
            <h2 className="booking-header">FellowBots Simulator Booking</h2>
            <p className="booking-description">The future of driving licenses</p>
            {/* Bokningsformulär */}
            <div className="booking-form">
                <BookingForm
                    bookingData={bookingData}
                    onInputChange={handleInputChange}
                    onBookingSubmit={handleBookingSubmit}
                />
            </div>
        </div>
    );
};

export default Booking;
