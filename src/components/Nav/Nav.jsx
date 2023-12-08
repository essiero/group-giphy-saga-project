import { HashRouter as Router, Route, Link } from 'react-router-dom';
import SearchList from '../SearchList/SearchList';
import FavoritesList from '../FavoritesList/FavoritesList';

function Nav() {
return(
    <>
<Link to="/">
<h2>Search</h2>
</Link>
<Link to="/favorites">
<h2>Favorites</h2>
</Link>
</>
)
}

export default Nav;