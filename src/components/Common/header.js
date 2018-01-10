import React , { Component } from 'react';

import {NavLink} from 'react-router-dom'

import '../../assets/css/header.css'

class Header extends Component {
  render () {
    return (
      <ul className="nav">
          <li><NavLink exact to="/">Index</NavLink></li>
          <li><NavLink exact to="/about.html">about</NavLink></li>
      </ul>
    )
  }
}
export default Header
