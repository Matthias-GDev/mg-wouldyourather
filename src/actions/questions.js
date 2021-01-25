export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'

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