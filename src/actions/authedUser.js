import { SET_AUTHED_USER,LOGOUT_AUTHED_USER } from './types.js'

export function setAuthedUser(id){
    return {
        type: SET_AUTHED_USER,
        id
    }
}

export function logoutAuthedUser(){
    return {
        type: LOGOUT_AUTHED_USER,
    }
}