import React from 'react';

const Testimonial = ({data}) => {
    return (
        <div className="col">
            <div className="card h-100">
            <p style={{padding:'1rem 1rem'}}>{data.quote}</p>
            <div className="card-body d-flex">
                <div>
                    <img style={{width:'50px', marginRight:'20px'}} src={data.img} alt='' />
                </div>
                <div>
                    <h6 style={{color:'#1CC7C1'}}>{data.name}</h6>
                    <p>{data.from}</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Testimonial;