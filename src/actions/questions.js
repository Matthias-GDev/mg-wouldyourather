import { RECEIVE_QUESTIONS,SAVE_QUESTION,ADD_ANSWER_TO_QUESTION } from './types.js'

export function receiveQuestions (questions){
    return {
        type:RECEIVE_QUESTIONS,
        questions
    }
}

export function saveQuestion (question){
    return{
        type:SAVE_QUESTION,
        question,
    }   
}

export function addAnswerToQuestion (questionId,userId,answer){
    return{
        type:ADD_ANSWER_TO_QUESTION,
        questionId,
        userId,
        answer
    }   
}
