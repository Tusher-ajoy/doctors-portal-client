import React, { useContext, useEffect, useState } from 'react';
import { Calendar } from 'react-calendar';
import { userContext } from '../../../App';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';

const calenderStyle = {
    boxShadow:'2px 2px 5px gray',
    padding:'60px 20px',
    backgroundColor:'white'
}
const Appointments = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);
    const handleDateChange = date  => {
        setSelectedDate(date);
    }
    useEffect(()=>{
        fetch('https://hidden-journey-37669.herokuapp.com/appointmentsByDate', {
            method:'POST',
            headers:{'content-type':'application/json'},
            body: JSON.stringify({date: selectedDate, email:loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setAppointments(data))
    },[selectedDate])
    return (
        <div className='col-md-10'>
            <h3 className='my-5'>Appointments</h3>
            <div className='row'>
                <div className='col-md-6' style={calenderStyle}>
                    <Calendar onChange={handleDateChange} value={new Date()} />
                </div>
                <div className='col-md-6'>
                    <AppointmentsByDate appointments={appointments} selectedDate={selectedDate} />
                </div>
            </div>
        </div>
    );
};

export default Appointments;