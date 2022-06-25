import React, { useState } from 'react';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({booking, date}) => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="col">
            <div className="card h-100">
            <div className="card-body text-center">
                <h5 className="card-title" style={{color:'#12D0D7'}}>{booking.subject}</h5>
                <h6>{booking.visitingHour}</h6>
                <p className="card-text text-secondary">{booking.totalSpace} SPACES AVAILABLE</p>
                <button type="button" onClick={openModal} className="btn btn-primary" style={{background:'linear-gradient(100deg, #18D3B2 0%, #10CFEB 100%)',borderColor:'#1CC7C1', padding:'10px 15px'}} >BOOK APPOINTMENT</button>
                <AppointmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} appointmentOn={booking.subject} date={date} />
            </div>
            </div>
        </div>
    );
};

export default BookingCard;