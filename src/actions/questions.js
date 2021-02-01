export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const ADD_ANSWER_TO_QUESTION = 'ADD_ANSWER_TO_QUESTION'

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
