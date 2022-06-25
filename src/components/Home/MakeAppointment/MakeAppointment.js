import React from 'react';
import { useNavigate } from 'react-router-dom';
import doctor from '../../../images/doctor.png'
import './MakeAppointment.css'

const MakeAppointment = () => {
    let navigate = useNavigate();
    return (
        <section className='make-appointment'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-5'>
                        <img src={doctor} alt='' />
                    </div>
                    <div className='col-md-7 text-white mt-5'>
                        <h5 style={{color:'#1CC7C1'}}>APPOINTMENT</h5>
                        <h1 className='my-4'>Make an appointment Today</h1>
                        <p>Cupidatat ipsum labore mollit Lorem. Duis veniam anim do reprehenderit nostrud incididunt qui et consectetur dolor. Irure laborum dolore sit aliquip commodo ex irure in aliqua esse enim Lorem.</p>
                        <button type="button" onClick={()=>navigate('/appointment')} className="btn btn-primary mt-4" style={{background:'linear-gradient(100deg, #18D3B2 0%, #10CFEB 100%)',borderColor:'#1CC7C1', padding:'10px 50px'}} >Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;