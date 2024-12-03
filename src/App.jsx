import { Routes, Route, NavLink } from "react-router-dom";
import Users from "./Pages/Users/index.jsx";
import Logo from "./images/s-logo.svg";
import "./App.css";
import Books from "./Pages/Books/books.jsx";
import Search from "./Pages/Search/index.jsx";

function App() {
  return (
    <div>
      <div className="header">
        <div className="container">
          <header className="head">
            <div className="logo">
              <img className="header-logo" src={Logo} alt="" />
            </div>
            <div className="menu">
              <ul>
                <li>
                  <NavLink to="/">1-masala</NavLink>
                </li>
                <li>
                  <NavLink to="/books">2-masala</NavLink>
                </li>
                <li>
                  <NavLink>3-masala</NavLink>
                </li>
                <li>
                  <NavLink to="/search">4-masala</NavLink>
                </li>
              </ul>
            </div>
            <div className="contact">
              <button>CONTACT</button>
            </div>
          </header>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Users></Users>}></Route>
        <Route path="/books" element={<Books></Books>}></Route>
        <Route path="/search" element={<Search></Search>}></Route>
      </Routes>
    </div>
  );
}

export default App;
