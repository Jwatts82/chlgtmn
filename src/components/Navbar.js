import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        
        <nav className="navbar">
            <h1>TMN</h1>
            <div className="links">
                <Link to="/">Player List</Link>
            </div>
        </nav>
    )
}

export default Navbar

// <PlayerContext.Consumer>{(context) => {
//     return (
//         JSX
//     )
// }}</PlayerContext.Consumer>