import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png'
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const serviceData = [
    {
        id:1,
        name:'Fluoride Treatment',
        img:fluoride
    },
    {
        id:2,
        name:'Cavity Filling',
        img:cavity
    },
    {
        id:3,
        name:'Teeth Whitening',
        img:whitening
    }
]

const Services = () => {
    return (
        <section className='container my-5 text-center' id='service'>
            <h5 style={{color:'#1CC7C1'}}>OUR SERVICES</h5>
            <h1>Service We Provide</h1>
            <div className='row my-5'>
                {
                    serviceData.map(service => <ServiceDetails key={service.id} service={service} />)
                }
            </div>
        </section>
    );
};

export default Services;