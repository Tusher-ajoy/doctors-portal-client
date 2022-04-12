import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <section className='contact-container'>
            <div className='container py-5 text-center'>
                <h5 style={{color:"#1CC7C1"}}>CONTACT US</h5>
                <h1 className='text-white'>Always Contact With us</h1>
                <div className='contact-from my-5'>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email address*" required />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Subject*"  required/>
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder='Your Message*' rows="3"></textarea>
                    </div>
                    <button class="btn btn-primary" style={{background:'linear-gradient(100deg, #18D3B2 0%, #10CFEB 100%)',borderColor:'#1CC7C1', padding:'10px 70px'}} type="submit">SUBMIT</button>
                </div>
            </div>
        </section>
    );
};

export default Contact;