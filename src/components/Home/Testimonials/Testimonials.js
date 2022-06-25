import React, { useEffect, useState } from 'react';
import people1 from '../../../images/people-1.png'
import people2 from '../../../images/people-2.png'
import people3 from '../../../images/people-3.png'
import Testimonial from '../Testimonial/Testimonial';

const testimonialData = [
    {
        id:1,
        quote:'Laboris id ullamco labore ipsum officia officia labore quis tempor dolor non anim et. Labore amet mollit cupidatat dolore culpa laborum reprehenderit nisi sint qui officia.',
        name:'Winson Herry',
        from:'California',
        img:people1
    },
    {
        id:2,
        quote:'Laboris id ullamco labore ipsum officia officia labore quis tempor dolor non anim et. Labore amet mollit cupidatat dolore culpa laborum reprehenderit nisi sint qui officia.',
        name:'Winson Herry',
        from:'California',
        img:people2
    },
    {
        id:3,
        quote:'Laboris id ullamco labore ipsum officia officia labore quis tempor dolor non anim et. Labore amet mollit cupidatat dolore culpa laborum reprehenderit nisi sint qui officia.',
        name:'Winson Herry',
        from:'California',
        img:people3
    }
]

const Testimonials = () => {
    const [feedback, setFeedback] = useState([]);
    useEffect(()=>{
        fetch('https://hidden-journey-37669.herokuapp.com/feedbacks')
        .then(res => res.json())
        .then(data => setFeedback(data))
    },[])
    const shuffled = [...feedback].sort(() => 0.5 - Math.random());
    const randomThree =  shuffled.slice(0,3);

    return (
        <section className='container my-5' id='reviews'>
            <h5 style={{color:'#1CC7C1'}}>TESTIMONIAL</h5>
            <h1>What's Our Patients <br /> Says</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 text-secondary my-5">
                {
                    randomThree.map(data => <Testimonial key={data._id} data={data} />)
                }
            </div>
        </section>
    );
};

export default Testimonials;