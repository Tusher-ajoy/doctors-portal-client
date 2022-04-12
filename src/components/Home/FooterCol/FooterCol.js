import React from 'react';
import { Link } from 'react-router-dom';
import './FooterCol.css'

const FooterCol = (props) => {
    return (
        <div className='col-md-3'>
            <h5 style={{color:'#1CC7C1'}} className="my-4">{props.menuTitle}</h5>
            <ul className='list'>
                {
                    props.menuItems.map(item => <li><Link className='text-secondary' to={item.link}>{item.name}</Link></li>)
                }
            </ul>
            {
                props.children
            }
        </div>
    );
};

export default FooterCol;