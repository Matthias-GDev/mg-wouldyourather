import { RECEIVE_USERS,ADD_QUESTION_TO_USER,ADD_ANSWER_TO_USER } from '../actions/types'

export default function users (state = {}, action) {
    switch(action.type){
        case RECEIVE_USERS:
            return{
                ...state,
                ...action.users
            }

        case ADD_QUESTION_TO_USER:
            const {questionId,userId} = action
            return {
                ...state,
                [userId] : {
                        ...state[userId],
			            questions: state[userId].questions.concat([questionId])
                }
            }
                
        case ADD_ANSWER_TO_USER:
            const {qId,uId,answer} = action

            return{
                ...state,
                [uId] :{
                    ...state[uId],
                    answers: {
                        ...state[uId].answers,
                        [qId]:answer
                    }
                }
            }
             
        default:
            return state
    }
}
