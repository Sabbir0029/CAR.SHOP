import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Dashboard = () => {
    const {admin} = useAuth()
    return (
        <div className='dashboard'>
            <div className='menu'>
                <Link to='/dashboard' className='menu'>Dashboard</Link>
                {admin &&
                <Link to='/makeadmin' className='menu'>Make Admin</Link>
                }
                {admin &&
                <Link to='/addprodect' className='menu'>Add Prodects</Link>
                }
            </div>
            <h1>Dashboard</h1>
        </div>
    );
};

export default Dashboard;