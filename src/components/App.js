import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'

//Custom Components
import Navigation from './Navigation'
import SignIn from './SignIn'
import Dashboard from './Dashbaord'
import Logout from './Logout'
import ProtectedRoute from './ProtectedRoute'
import NewQuestion from './NewQuestion'
import Leaderboard from './Leaderboard'
import QuestionDetail from './QuestionDetail'
import PageNotFound from './PageNotFound'


class App extends Component {

    componentDidMount(){
        //this.props.dispatch(handleInitialData())
        this.props.handleInitialData();
    }

    render(){

        return(
            <Router>
                <Navigation />
                <br />
                <div>
                    <Switch>
                        <Route path='/' exact component={SignIn} />
                        <Route path='/logout' exact component={Logout} />
                        <ProtectedRoute path='/dashboard' exact component={Dashboard} />
                        <ProtectedRoute path='/add' exact component={NewQuestion} />
                        <ProtectedRoute path='/leaderboard' exact component={Leaderboard} />
                        <ProtectedRoute path='/question/:id' component={QuestionDetail} />
                        <Route path='/signin' exact component={SignIn} />
                        <Route component={PageNotFound} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

function mapStateToProps(authedUser) {
    return{
        authedUser:authedUser
    }
}

export default connect(mapStateToProps, { handleInitialData })(App)