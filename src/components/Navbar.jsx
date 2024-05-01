import { NavLink } from 'react-router-dom';
import pokePin from '/poke-pin.png'
const NavBar = () => {

    const setActiveClass = ({ isActive }) => (isActive ? "active" : "no-active");

    return (
        <nav className="navbar navbar-expand-lg bg-secondary">
            <div className="container-fluid">
                <img 
                    src={pokePin} 
                    alt="Pokemon Pin Image" 
                    height="50"
                />
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink
                                className={setActiveClass}
                                to="/"
                            >
                            Home
                            </NavLink>
                        </li>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <li className="nav-item">
                            <NavLink
                                className={setActiveClass}
                                to="/finder"
                            >
                            Pokemones
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;