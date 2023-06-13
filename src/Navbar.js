import { Link } from 'react-router-dom'
import React  from 'react';

const Navbar = () => {
    const linkStyle = {
        textDecoration: "none",
        color: '#fafafa',
        backgroundColor: '#f1356d',
        borderRadius: '5px',
        padding: '8px'
    }

    return (
        <nav className="navbar">
            <h1><a href='/'>The Blog</a></h1>
            <div className="links">
                <Link style={linkStyle} to="create">New Blog</Link>
            </div>
        </nav>

    );
}

export default Navbar;