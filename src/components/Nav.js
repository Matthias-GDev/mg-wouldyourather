import React, { Component } from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'

class Nav extends Component {
    render(){
        return(
            <nav className='app-navigation'>
                <ul>
                    <li>
                        <NavLink to='/dashboard' exact activeClassName='active'>
                            Home
                        </NavLink>
                    </li>
                    <li>New Question</li>
                    <li>Leader Board</li>
                    <li>
                        <NavLink to='/logout' exact activeClassName='active'>
                            Logout
                        </NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default connect()(Nav)