import React from 'react';
import Info from '../Info/Info';
import { faPhone, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons'

const infoData = [
    {
        id:1,
        title:'Opening Hours',
        description:'We are open for 24/7',
        icon:faClock,
        backgroundColor:'primary'
    },
    {
        id:2,
        title:'Visit Our location',
        description:'Brooklyn, NY 10036, United States',
        icon:faLocationDot,
        backgroundColor:'dark'
    },
    {
        id:3,
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
                    infoData.map(info => <Info key={info.id} info={info} />)
                }
            </section>
        </div>
    );
};

export default BusinessInfo;