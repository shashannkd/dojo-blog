import { Link } from 'react-router-dom'
import React  from 'react';

const NotFound = () => {
    const linkStyle = {
        textDecoration: "none",
        color: '#f1356d',
        fontWeight: '800',
        display: 'block'
    }

    return (
        <div className="not-found">
            <h1>Sorry, looks like you've lost your way :(</h1>
            <span><Link style={linkStyle} to='/'>Back to homepage...</Link></span>
        </div>
    );
}

export default NotFound;