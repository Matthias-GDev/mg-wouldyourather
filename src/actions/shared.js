import { getInitialData,getUsers,saveQuestionAPI } from '../utils/api'
import { receiveUsers,addQuestionToUser,addAnswerToUser } from '../actions/users'
import { receiveQuestions, addAnswerToQuestion,saveQuestion} from '../actions/questions'

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

export function handleSaveNewQuestion(question) {

    return (dispatch) => {

        const AllQuestionInfo = question

        return saveQuestionAPI(question)
        .then((question) => {
            dispatch(saveQuestion(AllQuestionInfo))
            dispatch(addQuestionToUser(question.id,question.author))
        })
    }
}


export function handleAnswerToQuestion(questionId,userId,answer)
{
    return (dispatch) => {
        dispatch(addAnswerToQuestion(questionId,userId,answer))
        dispatch(addAnswerToUser(questionId,userId,answer))
    }
}


