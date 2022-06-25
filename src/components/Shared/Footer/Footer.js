import React from 'react';
import FooterCol from '../FooterCol/FooterCol';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGooglePlus, faTwitter } from "@fortawesome/free-brands-svg-icons"


const noMenu = [
    {name:'Emergency Dental Care', link:'/emergency'},
    {name:'Check up', link:'/checkup'},
    {name:'Treatment of personal Diseases', link:'/diseases'},
    {name:'Tooth extraction', link:'/extraction'},
    {name:'Check up', link:'/checkup'},
];
const services = [
    {name:'Emergency Dental Care', link:'/emergency'},
    {name:'Check up', link:'/checkup'},
    {name:'Treatment of personal Diseases', link:'/diseases'},
    {name:'Tooth extraction', link:'/extraction'},
    {name:'Check up', link:'/checkup'},
    {name:'Check up', link:'/checkup'},
    {name:'Check up', link:'/checkup'},
];
const oralHealth = [
    {name:'Emergency Dental Care', link:'/emergency'},
    {name:'Check up', link:'/checkup'},
    {name:'Treatment of personal Diseases', link:'/diseases'},
    {name:'Tooth extraction', link:'/extraction'},
    {name:'Check up', link:'/checkup'},
    {name:'Check up', link:'/checkup'},
    {name:'Check up', link:'/checkup'},
];
const ourAddress = [
    {name:'New York - 101010 Hudson', link:'//google.com/map'},
    {name:'Yards', link:'//google.com/map'}
];

const Footer = () => {
    return (
        <footer className='pt-5 pb-3'>
            <div className='container'>
                <div className='row'>
                    <FooterCol key={1} menuTitle={"."} menuItems={noMenu} />
                    <FooterCol key={2} menuTitle={"Services"} menuItems={services} />
                    <FooterCol key={3} menuTitle={"Oral Health"} menuItems={oralHealth} />
                    <FooterCol key={4} menuTitle={"Our Address"} menuItems={ourAddress} >
                        <ul className='my-5 social-media'>
                            <li><FontAwesomeIcon className='social-media-icon' icon={faFacebook} /></li>
                            <li><FontAwesomeIcon className='social-media-icon' icon={faGooglePlus} /></li>
                            <li><FontAwesomeIcon className='social-media-icon' icon={faTwitter} /></li>
                        </ul>
                        <div className='mt-5'>
                            <h6 className='text-secondary'>Call Now</h6>
                            <button className='btn btn-primary' style={{background:'linear-gradient(100deg, #18D3B2 0%, #10CFEB 100%)',borderColor:'#1CC7C1'}}>+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <p className='text-secondary text-center mt-5'>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;