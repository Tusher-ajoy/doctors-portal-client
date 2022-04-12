import React from 'react';
import treatment from '../../../images/treatment.png'

const FeaturedService = () => {
    return (
        <section className='container mb-5'>
            <div className='row d-flex align-items-center'>
                <div className='col-md-6'>
                <img src={treatment} style={{height:'400px', width:'100%'}} alt="..." />
                </div>
                <div className='col-md-6'>
                    <h2>Exception Dental <br /> Care, on Your Terms</h2>
                    <p className='text-secondary my-4'>Minim excepteur quis dolore tempor incididunt consequat elit consectetur nisi ipsum laboris laborum. Ut magna enim cillum fugiat non aute duis fugiat. Minim laborum dolore mollit veniam elit nisi dolore. Magna pariatur enim tempor consequat ullamco ad sunt nulla.</p>
                    <button type="button" class="btn btn-primary" style={{background:'linear-gradient(100deg, #18D3B2 0%, #10CFEB 100%)',borderColor:'#1CC7C1', padding:'10px 50px'}}>Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedService;