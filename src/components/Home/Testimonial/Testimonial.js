import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons';

const Testimonial = ({ data }) => {
    const list = [];
    for(let i=0; i<data.rating; i++){
        list.push(<li style={{display:'inline-block', margin:'0px 5px'}}><FontAwesomeIcon style={{color:'gold', fontSize:'30px'}} icon={faStar} /></li>);
    }
    return (
        <div className="col">
            <div className="card h-100">
                <ul style={{listStyle:'none', overflow:'hidden', textAlign:'center', marginBottom:'0px', paddingLeft:'0', marginTop:'20px'}}>
                    {list}
                </ul>
                
                <p style={{ padding: '1rem 1rem', marginBottom:'0', paddingBottom:'0' }}>{data.message}</p>
                <div className="card-body" style={{textAlign:'end'}}>
                    <h6 style={{ color: '#1CC7C1' }}>{data.name}</h6>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;