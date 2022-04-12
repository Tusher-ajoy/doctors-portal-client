import React from 'react';
import './BlogPost.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const BlogPost = ({data}) => {
    return (
        <>
        <div className="col blog-card">
            <div className="card h-100 card-body mainContent">
                <div className="d-flex">
                    <div>
                        <img style={{width:'50px', marginRight:'20px'}} src={data.authorImg} alt='' />
                    </div>
                    <div>
                        <h6>{data.author}</h6>
                        <p className='text-secondary'>{data.date}</p>
                    </div>
                </div>
                <h6>{data.title}</h6>
                <p className='text-secondary'>{data.description}</p>
            </div>
            <div className='afterHover card h-100 card-body'>
                <h6>{data.author}</h6>
                <p>{data.date}</p>
                <h6>{data.title}</h6>
                <FontAwesomeIcon className='arrowIcon' icon={faArrowRight} />
            </div>
        </div>
        </>
    );
};

export default BlogPost;