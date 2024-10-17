import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Elements/Button';

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center px-24 py-4">
      <div className="text-3xl font-extrabold text-emerald-600 shadow-inner shadow-emerald-600 cursor-pointer">ANKESLANG</div>
      <div className="nav-link">
        <ul className="flex gap-20 font-bold">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
      <Button className="text-white bg-slate-900 rounded-3xl">
        <Link to="/login">Login</Link>
      </Button>
    </nav>
  );
};

export default Navigation;
