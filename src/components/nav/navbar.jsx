import React from 'react';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { logout } from '../../redux/actions/session/sessionActions';

const NavBar = () => {
    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state) => state.session.logged_in)

    const links = () => {
        if (isAuthenticated) {
            return (
              <div className="right-side-nav">
                <Link to="/polls">My Polls</Link>
                <Link to="/dashboard">Dashboard</Link>
                <div className='nav-logout'>
                    <button onClick={() => dispatch(logout())}>Logout</button>
                </div>
              </div>
            );
          } else {
            return (
              <div className="right-side-nav">
                <Link to={"/polls"}>Polls</Link>
                <Link to={"/login"}>Login</Link>
                <Link to={"/signup"}>Sign Up</Link>
              </div>
            );
          }
    }
    return (
        <div className='nav'>
            <div className='left-side-nav'>
                <Link to={"/"}>HelloPolls</Link>
            </div>
                {links()}
        </div>
    )
}

export default NavBar;