import {
    HashRouter,
    Switch,
    Route,
    NavLink
  } from 'react-router-dom'
import { headerTextstyle, routerTextstyle, routerBoxStyle, navbarstyle } from 'styles'
  export function Header(){
      return(
          <nav style={navbarstyle}>
              <NavLink style={headerTextstyle}exact activeClassName="active"to="/">
                  Home Page &nbsp;
              </NavLink>
              <NavLink style={headerTextstyle}exact activeClassName="active"to="/bank">
                  DecentraBank &nbsp;
              </NavLink>
              <NavLink style={routerTextstyle}exact activeClassName="active"to="/dao">
                  DecentraCorp DAO
              </NavLink>
              <NavLink style={routerTextstyle}exact activeClassName="active"to="/dao">
                 
              </NavLink>
          </nav>
      )
  }