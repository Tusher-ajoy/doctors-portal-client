import React from 'react';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';
import BlogPost from '../BlogPost/BlogPost';

const blogData = [
    {
        id:1,
        title:'Check at least a doctor in a year for your teeth',
        description:'Esse laboris tempor dolore ad est aliquip ullamco deserunt velit. Fugiat adipisicing sint laborum adipisicing voluptate sit.',
        author:'Rashed Kabir',
        authorImg:people1,
        date:'23 April 2019'
    },
    {
        id:2,
        title:'2 times of brush in a day can keep you healthy',
        description:'Esse laboris tempor dolore ad est aliquip ullamco deserunt velit. Fugiat adipisicing sint laborum adipisicing voluptate sit.',
        author:'Dr. Caudi',
        authorImg:people2,
        date:'23 April 2019'
    },
    {
        id:3,
        title:'The tooth cancer is taking a challenge',
        description:'Esse laboris tempor dolore ad est aliquip ullamco deserunt velit. Fugiat adipisicing sint laborum adipisicing voluptate sit.',
        author:'Dr. John Mitchel',
        authorImg:people3,
        date:'23 April 2019'
    }
]
const Blog = () => {
    return (
        <section className='container'>
            <div className='text-center my-5'>
                <h5 style={{color:'#1CC7C1'}}>OUR BLOG</h5>
                <h1>From Our Blog News</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 my-5">
                {
                    blogData.map(data => <BlogPost key={data.id} data={data} />)
                }
            </div>
        </section>
    );
};

export default Blog;