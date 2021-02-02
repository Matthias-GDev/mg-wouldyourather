import { getInitialData,getUsers,saveQuestionAPI,saveQuestionAnswerAPI } from '../utils/api'
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

export function handleAnswerToQuestion(qid,userId,answer)
{
    return (dispatch,getState) => {
        const {authedUser} = getState()
        const questionAnswer = {
            authedUser, 
            qid, 
            answer,
        }
        return saveQuestionAnswerAPI(questionAnswer)
        .then((answer) => {
            dispatch(addAnswerToQuestion(questionAnswer.qid,questionAnswer.authedUser,questionAnswer.answer))
            dispatch(addAnswerToUser(questionAnswer.qid,questionAnswer.authedUser,questionAnswer.answer))
        })
    }
}


