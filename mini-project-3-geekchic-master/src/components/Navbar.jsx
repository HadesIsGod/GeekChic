import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './styles/Navbar.css'
import { useDarkMode } from '../contexts/DarkModeContext'

function Navbar() {
    const { isDarkMode, toggleDarkMode } = useDarkMode()

    return (
        <nav className={isDarkMode ? 'nav dark-mode' : 'nav'}>
            <div className="logo">
                <img src="/images/logo.png" alt="Logo" /> {/* Updated src */}
            </div>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/info">Info</Link></li>
                    <li><Link to="/new_arival">New Arrival</Link></li>
                    <li><Link to='/productform'>Add Your Product</Link></li>
                </ul>
            </div>
            <div className="icons">
                <ul>
                    <li><Link to='/search'><img src={isDarkMode ? "/images/Search-Dark.svg" : "/images/search.svg"} id='search' alt="Search" /></Link></li> {/* Updated src */}
                    <li><button><img src={isDarkMode ? "/images/Person-Dark.svg" : "/images/charm_person.svg"} id='person' alt="Person" /></button></li> {/* Updated src */}
                    <li><button onClick={toggleDarkMode}><img src={isDarkMode ? "/images/light.svg" : "/images/Vector.svg"} alt="Toggle Dark Mode" /></button></li> {/* Updated src */}
                    <li><button><img src={isDarkMode ? "/images/Cart-Dark.svg" : "/images/cart.svg"} id='cart' alt="Cart" /></button></li> {/* Updated src */}
                    <li><button><img src="/images/Menu.png" alt="Menu" /></button></li> {/* Updated src */}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
