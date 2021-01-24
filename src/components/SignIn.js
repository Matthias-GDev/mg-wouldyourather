import '../css/signin.css';
import LOGO from '../images/logo.png'
import { Component } from 'react'

import { connect } from 'react-redux'

class SignIn extends Component{

    render(){

        const {registeredUsers} = this.props

        return(
            <center>
                <div className='sign-in-box'>
                    <div className='sign-in-header'>
                        <span className='sign-in-title'>Welcome to the Would You Rather App!</span>
                        <br/>
                        <span className='sign-in-title-small'>Please sign in to continue.</span>
                    </div>
                    <div className='sign-in-body'>
                        <img className='sign-in-logo' alt='logo' src={LOGO} />
                        <br />
                        <p style={{'color':'lightblue'}}>Sign In</p>
                        <form>
                            <select>
                                {
                                    Object.keys(registeredUsers).map( user =>
                                        <option key={user} value={user}>
                                            {registeredUsers[user].name}
                                        </option>
                                    )
                                }
                            </select>
                            <br /><br />
                            <button className='sign-in-button'>Sign In</button>
                        </form>
                    </div>
                </div>
            </center>
        )
    }
}

function mapStateToProps ({ users }){
    return {
        registeredUsers: users
    }
}

export default connect(mapStateToProps)(SignIn)