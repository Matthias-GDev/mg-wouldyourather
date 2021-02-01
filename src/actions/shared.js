import { getInitialData,getUsers } from '../utils/api'
import { receiveUsers,addQuestionToUser,addAnswerToUser } from '../actions/users'
import { receiveQuestions, addAnswerToQuestion} from '../actions/questions'

export function handleInitialData () {
    return (dispatch) => {
        return getInitialData()
            .then(({users,questions}) => {
                dispatch(receiveUsers(users))
                dispatch(receiveQuestions(questions))
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


export function handleAnswerToQuestion(questionId,userId,answer)
{
    return (dispatch) => {
        dispatch(addAnswerToQuestion(questionId,userId,answer))
        dispatch(addQuestionToUser(questionId,userId))
        dispatch(addAnswerToUser(questionId,userId,answer))
    }
}


