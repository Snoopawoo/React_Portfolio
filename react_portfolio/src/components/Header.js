import {NavLink} from 'react-router-dom';
function Header() {
    return (
        <header>
            <h3>Portfolio</h3>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/Gallery'>Gallery</NavLink>
                <NavLink to='/Contact'>Contact</NavLink>
            </nav>
        </header>
    )
}

export default Header;