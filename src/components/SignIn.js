import '../css/signin.css';
import LOGO from '../images/logo.png'
import { Component } from 'react'
import { setAuthedUser } from '../actions/authedUser'
import { connect } from 'react-redux'

class SignIn extends Component{

    constructor(props){
        super(props)
        this.state = {
            selectedUserId:null,
        }
        this.handleLoginSelectionChanged = this.handleLoginSelectionChanged.bind(this)
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
    }

    handleLoginSubmit(e) 
    {
        e.preventDefault()
        const newLogginUserId = this.state.selectedUserId
        this.props.dispatch(setAuthedUser(newLogginUserId))
        //ToDo: Go to Homescreen
    }

    handleLoginSelectionChanged(e)
    {
        const newUserLoginId = e.target.value;
        this.setState({
            selectedUserId:newUserLoginId
        })
    }

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
                        <form onSubmit={this.handleLoginSubmit}>
                            <select onChange={this.handleLoginSelectionChanged}>
                                {
                                    Object.keys(registeredUsers).map( user =>
                                        <option className='sign-in-option' style={{'backgroundImage':`url(${registeredUsers[user].avatarURL})`}} key={user} value={registeredUsers[user].id}>
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