import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import UserProfile from './pages/UserProfile';

export default function App() {

    return ( 
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/profile/*' element={<Profile />}>
                    {/* <Route path=':id' element={}/> */}
                    <Route path='me' element={<UserProfile />}/>
                </Route>
            </Routes>
        </Router>
    )
}

