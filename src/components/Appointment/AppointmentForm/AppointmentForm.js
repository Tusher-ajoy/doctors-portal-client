import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
import './AppointmentForm.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width:'50%',
        padding:'30px 80px',
        border:'none',
        boxShadow: '1px 1px 5px #888888',
    },
};

Modal.setAppElement('#root');

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.service = appointmentOn;
        data.appointmentDate = date;
        data.createdDate = new Date();

        fetch('https://hidden-journey-37669.herokuapp.com/addAppointment',{
            method:'POST',
            headers : { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success =>{
            if(success){
                closeModal();
                alert('Appointment created successfully')
            }
        })
    }
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h4 style={{ color: '#12D0D7' }} className='text-center mb-3'>{appointmentOn}</h4>
                <p className='text-secondary text-center'>On {date.toDateString()}</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <select className='modal-from-input' {...register("gender")}>
                        <option value="" disabled selected>Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    {errors.time && <span style={{ color: 'red' }}>This field is required</span>}<br />
                    
                    <input className='modal-from-input' {...register("name", { required: true })} placeholder="Your name" />
                    {errors.name && <span style={{ color: 'red' }}>This field is required</span>}<br />

                    <input type='number'  className='modal-from-input' {...register("weight", { required: true })} placeholder="Weight" />
                    {errors.weight && <span style={{ color: 'red' }}>This field is required</span>}<br />

                    <input className='modal-from-input' type="number" {...register("number", { required: true })} placeholder="Phone Number" />
                    {errors.number && <span style={{ color: 'red' }}>This field is required</span>}<br />

                    <input className='modal-from-input' type='email' {...register("email", { required: true })} placeholder="Email" />
                    {errors.email && <span style={{ color: 'red' }}>This field is required</span>}<br />

                    <input className='float-end px-5 py-1' style={{background:'linear-gradient(100deg, #18D3B2 0%, #10CFEB 100%)',borderColor:'#1CC7C1', color:'white', borderRadius:'5px'}} type="submit" />
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;