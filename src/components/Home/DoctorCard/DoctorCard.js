import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import './DoctorCard.css'

const DoctorCard = ({doctor}) => {
    return (
        <div className="col">
            <div className="card h-100 doctor-card">
            <img src={doctor.img} className="card-img-top doctor-img" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{doctor.name}</h5>
                <p className="card-text"><FontAwesomeIcon style={{color:'#1CC7C1'}} icon={faPhone} />{doctor.phone}</p>
            </div>
            </div>
        </div>
    );
};

export default DoctorCard;