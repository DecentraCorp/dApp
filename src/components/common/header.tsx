import {
    HashRouter,
    Switch,
    Route,
    NavLink
  } from 'react-router-dom'

  export function Header(){
      return(
          <nav>
              <NavLink exact activeClassName="active"to="/">
                  home &nbsp;
              </NavLink>
              <NavLink exact activeClassName="active"to="/bank">
                  Bank &nbsp;
              </NavLink>
              <NavLink exact activeClassName="active"to="/dao">
                  Dao
              </NavLink>
          </nav>
      )
  }