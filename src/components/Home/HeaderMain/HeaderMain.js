import React from 'react';
import { useNavigate } from 'react-router-dom';
import chair from '../../../images/chair.png'

const HeaderMain = () => {
    let navigate = useNavigate();
    return (
        <div className='container'>
            <main className='row my-5 d-flex align-items-center'>
                <div className='col-md-6'>
                    <h1 style={{color:'#3A4256'}}>Your New Smile <br /> Starts Here</h1>
                    <p className='text-secondary'>Eu non tempor dolor irure enim ullamco aliquip tempor ex reprehenderit tempor velit. Proident Lorem ex et cupidatat esse consectetur esse laboris deserunt pariatur. Mollit culpa deserunt pariatur qui pariatur aliquip elit veniam esse nisi. Esse ullamco incididunt Lorem cupidatat eiusmod ea.</p>
                    <button type="button" onClick={()=> navigate(`/appointment`)} className="btn btn-primary" style={{background:'linear-gradient(100deg, #18D3B2 0%, #10CFEB 100%)',borderColor:'#1CC7C1', padding:'10px 15px'}} >GET APPOINTMENT</button>
                </div>
                <div className='col-md-6'>
                    <img src={chair} className="img-fluid" alt="..." />
                </div>
            </main>
        </div>
    );
};

export default HeaderMain;
