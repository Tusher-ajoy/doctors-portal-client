import React, { useRef } from 'react';
import './Contact.css'

const Contact = () => {
    const from = useRef(null);
    const contactDetails = {
        name: '',
        email: '',
        message: ''
    };
    const handleBlur = (e) => {
        contactDetails[e.target.name] = e.target.value;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(contactDetails);
        fetch('https://hidden-journey-37669.herokuapp.com/send', {
            method: "POST",
            body: JSON.stringify(contactDetails),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(response => {
            if(response.status === 'success'){
                alert("Message sent.");
            }
            else{
                alert("Message failed to send.")
            }
        })
        from.current.reset();
    }

    return (
        <section className='contact-container' id='contact-us'>
            <div className='container py-5 text-center'>
                <h5 style={{ color: "#1CC7C1" }}>CONTACT US</h5>
                <h1 className='text-white'>Always Contact With us</h1>
                <form className='contact-from my-5' onSubmit={handleSubmit} method="POST" ref={from}>
                    <div className="mb-3">
                        <input type="email" name='email' onBlur={handleBlur} className="form-control" id="exampleFormControlInput1" placeholder="Email address*" required />
                    </div>
                    <div className="mb-3">
                        <input type="text" name='name' onBlur={handleBlur} className="form-control" id="exampleFormControlInput2" placeholder="Name*" required />
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control" onBlur={handleBlur} name='message' id="exampleFormControlTextarea1" placeholder='Your Message*' rows="3" required></textarea>
                    </div>
                    <button className="btn btn-primary" style={{ background: 'linear-gradient(100deg, #18D3B2 0%, #10CFEB 100%)', borderColor: '#1CC7C1', padding: '10px 70px' }} type="submit">SUBMIT</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;