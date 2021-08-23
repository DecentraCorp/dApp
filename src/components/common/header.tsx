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
                  DecentraBank &nbsp;
              </NavLink>
              <NavLink style={routerBoxStyle}exact activeClassName="active"to="/bank">
                  DecentraStock &nbsp;
              </NavLink>
              <NavLink style={routerTextstyle}exact activeClassName="active"to="/dollar">
                  DecentraDollar &nbsp;
              </NavLink>
              <NavLink style={routerTextstyle}exact activeClassName="active"to="/dao">
                  DecentraCorp DAO
              </NavLink>
          </nav>
      )
  }