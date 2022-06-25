import React from 'react';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import FeaturedService from '../FeaturedService/FeaturedService';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import FeedBack from 'react-feedback-popup';

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <FeaturedService />
            <MakeAppointment />
            <Testimonials />
            <Blog />
            <Doctors />
            <Contact />
            <Footer />
            <FeedBack
				style={{zIndex:'2', marginLeft:'20px', position:'fixed'}}
				position="right"
				numberOfStars={5}
				headerText="Share your feedback"
				bodyText="How satisfied are you with our service...!"
				buttonText="Give us a feedback"
				// handleClose={() => console.log("handleclose")}
				handleSubmit={(data) => 
					fetch('https://hidden-journey-37669.herokuapp.com/addFeedback', {
						headers: {
							Accept: 'application/json',
							'Content-Type': 'application/json'
						},
						method: 'POST', 
						body: JSON.stringify(data),
					}).then((response) => { 
						if (!response.ok) {
							return Promise.reject('Our servers are having issues! We couldn\'t send your feedback!');
						}
						response.json()
					}).then(() => {
						alert('Success!! Thanks for your feedback.');
					}).catch((error) => {
						alert('Our servers are having issues! We couldn\'t send your feedback!', error);
					})
                    // console.log(data)
				}
				// handleButtonClick={(data) => console.log("handleButtonClick")}
			/>
        </div>
    );
};

export default Home;