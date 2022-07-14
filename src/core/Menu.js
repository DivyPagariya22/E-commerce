import { Link, Navigate } from "react-router-dom";
import { Fragment } from "react";
import { signout, isAuthenticated } from "../auth/helper";

const currentTab = (history, path) => {
  // console.log(window.location);
  if (window.location.pathname === path) {
    return { color: "#2ecc72" };
  } else {
    return { color: "#000000" };
  }
};

const Menu = ({ history }) => {
  // console.log(history);
  return (
    <div className='menu-bar container-fluid'>
      <ul className='nav nav-tabs  justify-content-center'>
        <li className='nav-item'>
          <Link style={currentTab(history, "/")} className='nav-link' to='/'>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            style={currentTab(history, "/cart")}
            className='nav-link'
            to='/cart'>
            Cart
          </Link>
        </li>
        {isAuthenticated() && isAuthenticated().user.roles === 0 && (
          <li className='nav-item'>
            <Link
              style={currentTab(history, "/user/dashboard")}
              className='nav-link'
              to='/user/dashboard'>
              Dashboard
            </Link>
          </li>
        )}

        {isAuthenticated() && isAuthenticated().user.roles === 1 && (
          <li className='nav-item'>
            <Link
              style={currentTab(history, "/admin/dashboard")}
              className='nav-link'
              to='/admin/dashboard'>
              Admin. Dashboard
            </Link>
          </li>
        )}

        {!isAuthenticated() && (
          <Fragment>
            <li className='nav-item'>
              <Link
                style={currentTab(history, "/signup")}
                className='nav-link'
                to='/signup'>
                Sign up
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                style={currentTab(history, "/signin")}
                className='nav-link'
                to='/signin'>
                Sign in
              </Link>
            </li>
          </Fragment>
        )}

        {isAuthenticated() && (
          <li className='nav-item'>
            <span
              className='nav-link text-warning'
              onClick={() => {
                signout(() => {
                  window.location.pathname = "/";
                });
              }}>
              Signout
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Menu;
