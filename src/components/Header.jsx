import React, { useRef } from 'react';
import { Container } from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import '../styles/header.css';
import { useDispatch } from 'react-redux';
import { cartUiAction } from '../store/cartUi-Slice';

const NAV__MENU = [
  {
    text: 'Home',
    path: '/home',
  },

  {
    text: 'About',
    path: '/about',
  },

  {
    text: 'Services',
    path: '/services',
  },

  {
    text: 'Hotel Listing',
    path: '/hotel-listing',
  },

];

const Header = () => {
  const menuRef = useRef();
  const dispatch = useDispatch();

  const cartShowToggle = () => {
    dispatch(cartUiAction.toggle());
  };

  const menuToggle = () => menuRef.current.classList.toggle('menu__active');
  return (
    <>
      <header style={{
        position: "sticky",
        top: 0
      }}>
        <div className="header__bottom">
          <Container>
            <div className="menu__container d-flex justify-content-between align-items-center">
              <span className="menu__bar">
                <i class="ri-menu-line" onClick={menuToggle}></i>
              </span>
              <div className="menu__list" ref={menuRef} onClick={menuToggle}>
                <div className="menu__left">
                  {NAV__MENU.map((item, index) => (
                    <NavLink
                      className={navClass =>
                        navClass.isActive ? 'active me-4 ' : 'me-4'
                      }
                      key={index}
                      to={item.path}
                    >
                      {item.text}
                    </NavLink>
                  ))}

                </div>
              </div>
              <div className="menu__right d-flex gap-4 align-items-center  ">
                <Link to="/signin">
                  <i class="ri-login-circle-line"></i> Login
                </Link>
                <Link to="/signup">
                  <i class="ri-user-line"></i> Register
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
};

export default Header;
