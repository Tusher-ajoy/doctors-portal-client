import React, { useContext, useEffect, useState } from 'react';
import { Menu, MenuItem, ProSidebar, SidebarFooter } from 'react-pro-sidebar';
import { faList, faArrowRightFromBracket, faGear, faCalendar, faUserGroup, faFilePrescription, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Sidebar.css'
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [isDoctor, setIsDoctor] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://hidden-journey-37669.herokuapp.com/isDoctor', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsDoctor(data));
    }, [])
    const handleSignOut = () =>{
        sessionStorage.removeItem('userToken')
        setLoggedInUser({})
        navigate(`/`)
    }
    return (
        <ProSidebar className='sidebar-wrapper pt-5'>
            <Menu iconShape="square">
                <MenuItem className='sidebar-item' onClick={() => navigate('/dashboard', { replace: true })} >
                    <FontAwesomeIcon style={{ marginRight: '15px' }} icon={faList} />
                    Dashboard
                </MenuItem>
                {isDoctor && <div>
                <MenuItem className='sidebar-item' onClick={() => navigate('/dashboard/appointments', { replace: true })} >
                    <FontAwesomeIcon style={{ marginRight: '15px' }} icon={faCalendar} />
                    Appointments
                </MenuItem>
                <MenuItem className='sidebar-item' onClick={() => navigate('/dashboard/allPatients', { replace: true })} >
                    <FontAwesomeIcon style={{ marginRight: '15px' }} icon={faUserGroup} />
                    Patients
                </MenuItem>
                </div>}
                <MenuItem className='sidebar-item' onClick={() => navigate('/dashboard/prescription', { replace: true })}>
                    <FontAwesomeIcon style={{ marginRight: '15px' }} icon={faFilePrescription} />
                    Prescription
                </MenuItem>
                {isDoctor && <div>
                <MenuItem className='sidebar-item' onClick={() => navigate('/dashboard/addDoctor', { replace: true })}>
                    <FontAwesomeIcon style={{ marginRight: '15px' }} icon={faUserPlus} />
                    Add Doctor
                </MenuItem>
                <MenuItem className='sidebar-item' >
                    <FontAwesomeIcon style={{ marginRight: '15px' }} icon={faGear} />
                    Setting
                </MenuItem>
                </div>}
            </Menu>

            <SidebarFooter>
                <MenuItem className='logout-style' onClick={handleSignOut} >
                    <FontAwesomeIcon style={{ marginRight: '15px' }} icon={faArrowRightFromBracket} />
                    LogOut
                </MenuItem>
                {/* <FontAwesomeIcon icon={faArrowRightFromBracket} /> */}
            </SidebarFooter>
        </ProSidebar>
    );
};

export default Sidebar;