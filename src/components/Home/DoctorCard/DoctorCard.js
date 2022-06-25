import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import './DoctorCard.css'

const DoctorCard = ({doctor}) => {
    return (
        <div className="col">
            <div className="card h-100 doctor-card">
            {
                doctor.image 
                ? <img style={{height:'200px'}} src={`data:image/jpeg;base64,${doctor.image.img}`} className="card-img-top doctor-img" alt="..." />
                : <img style={{height:'200px'}} src={`https://hidden-journey-37669.herokuapp.com/${doctor.img}`} className="card-img-top doctor-img" alt="..." /> 
            }
            <div className="card-body">   
                <h5 className="card-title">{doctor.name}</h5>
                <p className="card-text"><FontAwesomeIcon style={{color:'#1CC7C1'}} icon={faPhone} />+81 124 568 954</p>
            </div>
            </div>
        </div>
    );
};

export default DoctorCard;