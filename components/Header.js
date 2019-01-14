import React, { Component } from 'react';
import Link from 'next/link';

export const Navbar = ({ children }) => <nav className="navbar is-dark">
  <div className="container">
    {children}
  </div>
</nav>;

export const Brand = ({ to, hamburgerState, onHamburgerClick }) => <div className="navbar-brand">
  <Link href={to}>
    <a className="navbar-item">
      <img src="/static/logo.png" alt="TravelBaas.nl" />
    </a>
  </Link>

  <a className={`navbar-burger burger ${hamburgerState ? 'is-active' : null}`} onClick={onHamburgerClick}>
    <span />
    <span />
    <span />
  </a>
</div>;

export const Navigation = ({ children, hamburgerState }) => <div className={`navbar-menu ${hamburgerState ? 'is-active' : null}`}>
  <div className="navbar-start" />
  <div className="navbar-end">
    {children}
  </div>
</div>;

export const ItemLink = ({ children, to, active }) => <Link href={to}>
  <a className={`navbar-item ${active ? 'is-active' : null}`}>
    {children}
  </a>
</Link>;

export default class Header extends Component {
  state = {
    hamburger: false,
  };

  toggleHamburger = () => {
    this.setState({
      hamburger: !this.state.hamburger,
    });
  };

  render() {
    return <Navbar>
      <Brand hamburgerState={this.state.hamburger} onHamburgerClick={this.toggleHamburger} />
      <Navigation hamburgerState={this.state.hamburger}>
        {/* <ItemLink to="/" active={true}>Home</ItemLink> */}
        {/* <ItemLink to="/projects">Projects</ItemLink> */}
        {/* <ItemLink to="/contact">Contact</ItemLink> */}
      </Navigation>
    </Navbar>;
  }
};
