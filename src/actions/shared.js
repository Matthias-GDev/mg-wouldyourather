import { getInitialData,getUsers } from '../utils/api'

import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { setAuthedUser } from '../actions/authedUser'

//toDo
const AUTHED_ID = 'sarahedo'

export function handleInitialData () {
    return (dispatch) => {
        return getInitialData()
            .then(({users,questions}) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(setAuthedUser(AUTHED_ID))
            })
    }
}

export function getUsersData(){
    return (dispatch) => {
        return getUsers()
            .then(({users}) => {
                dispatch(receiveUsers(users))
            })
    }
}
