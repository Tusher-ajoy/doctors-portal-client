import React from 'react';

const appointmentsByDateContainer = {
    boxShadow: '2px 2px 5px gray',
    padding: '20px',
    backgroundColor:'white'
}

const AppointmentsByDate = ({ appointments,selectedDate }) => {
    // console.log(appointments);
    return (
        <div style={appointmentsByDateContainer}>
            <div className='d-flex justify-content-between'>
                <h6 style={{ color: 'rgb(21,209,204)' }}>Appointments</h6>
                <p className='text-secondary'>{selectedDate.toDateString()}</p>
                {/* <h1>AppointmentsByDate {appointments.length}</h1>
            {
                appointments.map(app => <li key={app._id}>{app.name}</li>)
            } */}
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointments.length ?
                        appointments.map((appointment) => (
                            <tr>
                                <td>{appointment.name}</td>
                                <td>{appointment.number}</td>
                                <td><button type="button" class="btn btn-primary" style={{background:'linear-gradient(to bottom, #18D3B2 0%, #10CFEB 100%)',borderColor:'#1CC7C1'}}>Not visited</button></td>
                            </tr>
                        )) : 
                        <tr>
                            <td colSpan="3" className='text-center'>No Appointments</td>
                        </tr>
                    }
                    
                </tbody>
            </table>
        </div>
    );
};

export default AppointmentsByDate;