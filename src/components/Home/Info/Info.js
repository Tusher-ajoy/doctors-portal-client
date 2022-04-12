import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Info.css'

const Info = ({info}) => {
    return (
        <div className='col-md-4 info-card'>
            <div className={`d-flex px-4 py-5 info-container info-${info.backgroundColor}`}>
                <div>
                    <FontAwesomeIcon className='info-icon' icon={info.icon} />
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default Info;