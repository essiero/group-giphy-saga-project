import Header from "../Header/Header";
import SearchList from "../SearchList/SearchList";
import {useHistory, HashRouter as Router, Route } from "react-router-dom";
import FavoritesList from "../FavoritesList/FavoritesList";
import Nav from "../Nav/Nav";

function App() {
  return (
    <>
    <Router>
    <Header />
  
  <Nav />

    <Route exact path="/">
    <SearchList />
      </Route>

      <Route exact path="/favorites">
        <FavoritesList />
      </Route>
    </Router>
  </>);
}


export default App;
