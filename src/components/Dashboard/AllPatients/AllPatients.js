import React, { useEffect, useState } from 'react';

const AllPatients = () => {
    const [patients, setPatients] = useState([]);
    useEffect(() => {
        fetch('https://hidden-journey-37669.herokuapp.com/allPatients')
            .then(res => res.json())
            .then(data => setPatients(data))
    }, [])
    return (
        <div className='col-md-10 py-4'>
            <h4 style={{ color: '#15D1CC' }}>All Patients</h4>
            {
                patients.length ?
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Sr No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Service</th>
                                <th scope="col">Weight</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {patients.map((patient, index) => (
                                <tr>
                                    <th scope="row">{++index}</th>
                                    <td>{patient.name}</td>
                                    <td>{patient.gender}</td>
                                    <td>{patient.service}</td>
                                    <td>{patient.weight}</td>
                                    <td>{patient.number}</td>
                                    <td>{patient.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    : <h1>No Patients</h1>
            }
        </div>
    );
};

export default AllPatients;