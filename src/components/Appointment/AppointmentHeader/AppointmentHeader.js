import React from 'react';
import chair from '../../../images/chair.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'

const AppointmentHeader = ({handleDateChange}) => {
    return (
        <div className='container'>
            <main className='row my-5 d-flex align-items-center'>
                <div className='col-md-6'>
                    <h1>Appointment</h1>
                    <Calendar onChange={handleDateChange} value={new Date()} />
                </div>
                <div className='col-md-6'>
                    <img src={chair} className="img-fluid" alt="..." />
                </div>
            </main>
        </div>
    );
};

export default AppointmentHeader;