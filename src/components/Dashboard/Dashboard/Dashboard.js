import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const containerStyle = {
    backgroundColor:'#F4FDFB',
    height:'100vh'
}

const Dashboard = () => {
    return (
        <section>
            <div style={containerStyle} className='container-fluid row'>
                <div className='col-md-2'>
                    <Sidebar />
                </div>
                <Outlet />
            </div>
        </section>
    );
};

export default Dashboard;