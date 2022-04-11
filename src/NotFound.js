import { Link } from 'react-router-dom'
const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry, looks like you've lost your way :(</h2>
            <Link to='/'>
                <p>Back to homepage...</p>
            </Link>
        </div>
    );
}

export default NotFound;