import { ADMIN_SIGN_UP,ADMIN_SIGN_IN,CREATE_COURSE } from "../actionTypes/admin.actionType";

const initialState = {
    admin: ''
}

const adminReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADMIN_SIGN_UP:
            const adminSignUpJS = JSON.stringify(payload.data.accessToken)
            localStorage.setItem('user',JSON.stringify('admin'))
            localStorage.setItem('token',adminSignUpJS)
            return {...state, admin: payload.data}
        case ADMIN_SIGN_IN:
            const adminSignInJS = JSON.stringify(payload.data.accessToken)
            localStorage.setItem('user',JSON.stringify('admin'))
            localStorage.setItem('token',adminSignInJS)
            return {...state, admin: payload.data}
        case CREATE_COURSE:
            return {...state, admin: payload.data}
        default:
            return state;
    }
}

export default adminReducer;