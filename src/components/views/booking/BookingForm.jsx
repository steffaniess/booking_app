import React from 'react';
import './Booking.css';

const BookingForm = ({ bookingData, onInputChange, onBookingSubmit }) => {
    return (
        <form onSubmit={onBookingSubmit}>
            <label htmlFor="name">Namn:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={bookingData.name}
                onChange={onInputChange}
                required
            />
            <label htmlFor="email">E-post:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={bookingData.email}
                onChange={onInputChange}
                required
            />
            <label htmlFor="date">Datum:</label>
            <input
                type="date"
                id="date"
                name="date"
                value={bookingData.date}
                onChange={onInputChange}
                required
            />
            <label htmlFor="location">Plats:</label>
            <select
                id="location"
                name="location"
                value={bookingData.location}
                onChange={onInputChange}
                required
            >
                <option value="">Välj plats</option>
                <option value="Solna Trafikskola">Solna Trafikskola</option>
                <option value="Vinsta Trafikskola">Vinsta Trafikskola</option>
            </select>
            <button type="submit">Boka</button>
        </form>
    );
};

export default BookingForm;
