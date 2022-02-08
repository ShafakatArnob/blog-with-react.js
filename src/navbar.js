import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Blurry Blog</h1>
            <div className="links">
                {/*Link prevents req to go to the server and injects the component for that route instead. THE REACT MAGIC*/}
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    );
}


export default Navbar;
