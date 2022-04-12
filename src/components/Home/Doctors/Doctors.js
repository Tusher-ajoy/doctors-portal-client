import React from 'react';
import doctorImg from '../../../images/doctor-small.png'
import DoctorCard from '../DoctorCard/DoctorCard';

const doctorsData = [
    {
        name:'Dr. Caudi',
        phone:'+81 124 568 954',
        img:doctorImg
    },
    {
        name:'Dr. Caudi',
        phone:'+81 124 568 954',
        img:doctorImg
    },
    {
        name:'Dr. Caudi',
        phone:'+81 124 568 954',
        img:doctorImg
    }
]

const Doctors = () => {
    return (
        <section className='py-5 container'>
            <h5 style={{color:'#1CC7C1'}} className="text-center mb-5">OUR DOCTORS</h5>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    doctorsData.map(doctor => <DoctorCard doctor={doctor} />)
                }
            </div>
        </section>
    );
};

export default Doctors;