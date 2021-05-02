
import { Link } from 'react-router-dom'

const NotFound = () => {
    return ( 
        <div className="not-found">
        <h1>404</h1>
        <p>That page cannot be found</p>
        <Link to="/">Go back to home page.</Link></div>
     );
}
 
export default NotFound;