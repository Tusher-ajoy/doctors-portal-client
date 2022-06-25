import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingData = [
    {
        id:1,
        subject:'Teeth Orthodontics',
        visitingHour:'8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        id:2,
        subject:'Cosmetic Dentistry',
        visitingHour:'10:05 AM - 11:30 AM',
        totalSpace: 10
    },
    {
        id:3,
        subject:'Teeth Cleaning',
        visitingHour:'5:00 AM - 6:30 AM',
        totalSpace: 10
    },
    {
        id:4,
        subject:'Cavity Protection',
        visitingHour:'7:00 AM - 8:30 AM',
        totalSpace: 10
    },
    {
        id:5,
        subject:'Teeth Orthodontics',
        visitingHour:'8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        id:6,
        subject:'Teeth Orthodontics',
        visitingHour:'8:00 AM - 9:00 AM',
        totalSpace: 10
    },
]

const BookAppointment = ({date}) => {
    return (
        <section className='container'>
            <h1 className='text-center pt-4' style={{color:'#12D0D7'}}>Available Appointments on {date.toDateString()}</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 my-4">
                {
                    bookingData.map(booking => <BookingCard key={booking.id} booking={booking} date={date} />)
                }
            </div>
        </section>
    );
};

export default BookAppointment;