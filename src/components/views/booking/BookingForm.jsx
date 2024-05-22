import React from 'react';
import './Booking.css';

const BookingForm = ({ bookingData, onInputChange, onDateChange, onLocationChange, time,onBookingSubmit, availableTimes }) => {
    return (
        <form onSubmit={onBookingSubmit} className="booking-form">
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={bookingData.name}
                onChange={onInputChange}
                required
            />
            <label htmlFor="email">E-mail:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={bookingData.email}
                onChange={onInputChange}
                required
            />
            <label htmlFor="date">Date:</label>
            <input
                type="date"
                id="date"
                name="date"
                value={bookingData.date}
                onChange={(e) => 
                    onDateChange(e.target.value)}
                required
            />
            <label htmlFor="location">Location:</label>
            <select
                id="location"
                name="location"
                value={bookingData.location}
                onChange={(e) => {
                    onInputChange(e);
                    onLocationChange(e.target.value);
                }}
                required
            >
                <option value="">Choose location</option>
                <option value="Solna Trafikskola">Solna Trafikskola</option>
                <option value="Vinsta Trafikskola">Vinsta Trafikskola</option>
            </select>

            {availableTimes.length > 0 && (
                <div>
                    <label htmlFor="time">Available Times:</label>
                    <select
                        id="time"
                        name="time"
                        value={bookingData.time}
                        onChange={(e) => {
                            onInputChange(e);
                            time(e.target.value);
                        }}
                        required>
                    
                        {availableTimes.map((time, index) => (
                            <option key={index} value={time}>{time}</option>
                        ))}
                    </select>
                </div>
            )}
            <button type="submit">Book</button>
        </form>
    );
};

export default BookingForm;
