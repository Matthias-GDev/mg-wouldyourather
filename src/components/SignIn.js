import '../css/signin.css';
import LOGO from '../images/logo.png'
import { Component } from 'react'
import { setAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'

class SignIn extends Component{

    constructor(props){
        super(props)
        this.state = {
            selectedUserId:null,
            goToDashboard:false,
        }
        this.handleLoginSelectionChanged = this.handleLoginSelectionChanged.bind(this)
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    }

    handleLoginSubmit(e) 
    {
        e.preventDefault()
        const newLogginUserId = this.state.selectedUserId
        this.props.dispatch(setAuthedUser(newLogginUserId))
        this.setState({goToDashboard:true})
    }

    handleLoginSelectionChanged(e)
    {
        const newUserLoginId = e.target.value;
        this.setState({
            selectedUserId:newUserLoginId
        })
    }

    render(){

        const {registeredUsers,location} = this.props
        const { goToDashboard } = this.state
        const { from } = location.state || { from: { pathname: '/dashboard'}}

        if(goToDashboard)
        {
            return <Redirect to={from} />
        }

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
                        <form onSubmit={this.handleLoginSubmit}>
                            <select className='sign-in-combo' onChange={this.handleLoginSelectionChanged}>
                                <option key='default' value='0'></option>
                                {
                                    Object.keys(registeredUsers).map( user =>
                                        <option className='sign-in-option' key={user} value={registeredUsers[user].id}>
                                            {registeredUsers[user].name}
                                        </option>
                                    )
                                }
                            </select>
                            <br /><br />
                            <button disabled={!this.state.selectedUserId} className='sign-in-button'>Sign In</button>
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

export default withRouter(connect(mapStateToProps)(SignIn))