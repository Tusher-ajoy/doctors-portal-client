import React, { useEffect, useState } from 'react';
import doctorImg from '../../../images/doctor-small.png'
import DoctorCard from '../DoctorCard/DoctorCard';

const doctorsData = [
    {
        id:1,
        name:'Dr. Caudi',
        phone:'+81 124 568 954',
        img:doctorImg
    },
    {
        id:2,
        name:'Dr. Caudi',
        phone:'+81 124 568 954',
        img:doctorImg
    },
    {
        id:3,
        name:'Dr. Caudi',
        phone:'+81 124 568 954',
        img:doctorImg
    }
]

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(()=>{
        fetch('https://hidden-journey-37669.herokuapp.com/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])
    return (
        <section className='py-5 container'>
            <h5 style={{color:'#1CC7C1'}} className="text-center mb-5">OUR DOCTORS</h5>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    doctors.map(doctor => <DoctorCard key={doctor._id} doctor={doctor} />)
                }
            </div>
        </section>
    );
};

export default Doctors;