import React from 'react';
import Info from '../Info/Info';
import { faPhone, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons'

const infoData = [
    {
        title:'Opening Hours',
        description:'We are open for 24/7',
        icon:faClock,
        backgroundColor:'primary'
    },
    {
        title:'Visit Our location',
        description:'Brooklyn, NY 10036, United States',
        icon:faLocationDot,
        backgroundColor:'dark'
    },
    {
        title:'Contact us now',
        description:'+000 123 456724',
        icon:faPhone,
        backgroundColor:'primary'
    }
]

const BusinessInfo = () => {
    return (
        <div className='container'>
            <section className='row'>
                {
                    infoData.map(info => <Info info={info} />)
                }
            </section>
        </div>
    );
};

export default BusinessInfo;