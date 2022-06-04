import { ADMIN_SIGN_UP,ADMIN_SIGN_IN,CREATE_COURSE,GET_COURSES,ADMIN_SIGN_OUT,CREATE_MATERIAL,GET_MATERIALS } from "../actionTypes/admin.actionType";

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
            return {...state, admin:{...state.admin, course: payload.data}}
        case GET_COURSES:
            return {...state, admin: {...state.admin, courses: payload.data}}
        case CREATE_MATERIAL:
            return {...state, admin: {...state.admin, material: payload.data}}
        case GET_MATERIALS:
            return {...state, admin: {...state.admin, materials: payload.data}}
        case ADMIN_SIGN_OUT:
            localStorage.clear()
            return {...state, admin: ''}
            
        default:
            return state;
    }
}

export default adminReducer;