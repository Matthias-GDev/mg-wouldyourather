import { RECEIVE_USERS,ADD_QUESTION_TO_USER,ADD_ANSWER_TO_USER } from './types.js'

export function receiveUsers (users){
    return {
        type:RECEIVE_USERS,
        users
    }
}

export function addQuestionToUser (questionId,userId){
    return {
        type:ADD_QUESTION_TO_USER,
        questionId,
        userId,
    }
}

export function addAnswerToUser (qId,uId,answer){
    return {
        type:ADD_ANSWER_TO_USER,
        qId,
        uId,
        answer,
    }
}