import React from 'react';
import { Link } from 'react-router-dom';

const HeaderComponent = () => (
  <header className="d-flex justify-content-center py-3">
    <ul className="nav nav-pills">
      <li className="nav-item">
        <Link to="/tasks" className="nav-link">All Tasks</Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="nav-link">About</Link>
      </li>
    </ul>
  </header>
);

export default HeaderComponent;
