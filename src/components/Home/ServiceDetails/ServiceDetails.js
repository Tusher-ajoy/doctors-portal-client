import React from 'react';

const ServiceDetails = ({service}) => {
    return (
        <div className='col-md-4 text-secondary p-5'>
            <img style={{width:'50px'}} src={service.img} alt=''></img>
            <h5 className='my-3'>{service.name}</h5>
            <p>lorem tome down let him go then i will, come and continue farther</p>
        </div>
    );
};

export default ServiceDetails;