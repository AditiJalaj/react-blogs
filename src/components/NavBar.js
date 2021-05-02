import {Link } from 'react-router-dom'


const NavBar = () => {
    return ( 
        <div className="navbar">
        <h1>The React Blogs</h1>
        <nav className="links">
        <Link to="/"> Home </Link>
        <Link to="/create"> Create New</Link>
        </nav>
        </div>
     );
}
 
export default NavBar;