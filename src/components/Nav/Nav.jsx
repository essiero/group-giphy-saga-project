import { HashRouter as Router, Route, Link } from 'react-router-dom';
import SearchList from '../SearchList/SearchList';
import FavoritesList from '../FavoritesList/FavoritesList';
import { Nav } from 'react-bootstrap';

function NavBar() {
return(
    <Nav 
    defaultActiveKey= "/" as="ul"
    >
        <Nav.Item as="li">
            <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/#favorites">Favorites</Nav.Link>
        </Nav.Item>

    </Nav>
)
}

export default NavBar;