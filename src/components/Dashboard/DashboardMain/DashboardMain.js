import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../../App';
import './DashboardMain.css'

const DashboardMain = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const date = new Date();
    const [patients, setPatients] = useState([]);
    const [todayAppointments, setTodayAppointments] = useState([]);
    const [appointments, setAppointments] = useState([]);
    useEffect(()=>{
        fetch('https://hidden-journey-37669.herokuapp.com/allPatients')
        .then(res => res.json())
        .then(data => setPatients(data));
    },[])
    useEffect(()=>{
        fetch('https://hidden-journey-37669.herokuapp.com/appointmentsByDate', {
            method:'POST',
            headers:{'content-type':'application/json'},
            body: JSON.stringify({date: date, email:loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setTodayAppointments(data))
    },[date])
    useEffect(()=>{
        fetch('https://hidden-journey-37669.herokuapp.com/allAppointments')
        .then(res => res.json())
        .then(data => setAppointments(data))
    },[])

    return (
        <div className='col-md-10'>
            <h3 className='my-5'>Dashboard</h3>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                <div className="col">
                    <div className="card h-100 dash-card card-1">
                        <div className="card-body">
                            <div style={{ width: '30%', float: 'left' }}><h1>09</h1></div>
                            <div><p>Pending <br /> Appointments</p></div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 dash-card card-2">
                        <div className="card-body">
                            <div style={{ width: '30%', float: 'left' }}><h1>0{todayAppointments.length}</h1></div>
                            <div><p>Today's <br /> Appointments</p></div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 dash-card card-3">
                        <div className="card-body">
                            <div style={{ width: '30%', float: 'left' }}><h1>0{appointments.length}</h1></div>
                            <div><p>Total <br /> Appointments</p></div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 dash-card card-4">
                        <div className="card-body">
                            <div style={{ width: '30%', float: 'left' }}><h1>0{patients.length}</h1></div>
                            <div><p>Total <br /> Patients</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardMain;