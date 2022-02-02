import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import UserProfile from './UserProfile';

const Profile = () => {
  return <>
    <nav>
        <Link to='me'>User Profile Page</Link>
    </nav>

    <Outlet />
  </>;
};

export default Profile;
