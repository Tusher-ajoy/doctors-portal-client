import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png'
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const serviceData = [
    {
        name:'Fluoride Treatment',
        img:fluoride
    },
    {
        name:'Cavity Filling',
        img:cavity
    },
    {
        name:'Teeth Whitening',
        img:whitening
    }
]

const Services = () => {
    return (
        <section className='container my-5 text-center'>
            <h5 style={{color:'#1CC7C1'}}>OUR SERVICES</h5>
            <h1>Service We Provide</h1>
            <div className='row my-5'>
                {
                    serviceData.map(service => <ServiceDetails service={service} />)
                }
            </div>
        </section>
    );
};

export default Services;