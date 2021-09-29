import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = ({ user }) => {
  return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/"><i className="fa fa-film" aria-hidden="true"></i> Vidly</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-link" aria-current="page" to="/movies">Movies</NavLink>
          <NavLink className="nav-link" to="/customers">Customers</NavLink>
          <NavLink className="nav-link" to="/rentals">Rentals</NavLink>
          {!user && (<React.Fragment>
            <NavLink className="nav-link" to="/login"><i className="fa fa-sign-in" aria-hidden="true"></i> Login</NavLink>
            <NavLink className="nav-link" to="/register"><i className="fa fa-user-plus" aria-hidden="true"></i> Register</NavLink>
          </React.Fragment>)
          }
          {user && (<React.Fragment>
            <NavLink className="nav-link" to="/profile"><i className="fa fa-user" aria-hidden="true"></i> {user.name}</NavLink>
            <NavLink className="nav-link" to="/logout"><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</NavLink>
          </React.Fragment>)
          }
        </div>
      </div>
    </div>
  </nav>);
};

export default NavBar;
