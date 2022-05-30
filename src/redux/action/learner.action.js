import { LEARNER_SIGN_IN,LEARNER_SIGN_UP,LEARNER_SIGN_OUT,IS_FETCHING,ERROR,GET_LEARNER,GET_USER_ERROR } from "../actionTypes/learner.actionType";
import { notification } from 'antd'
import axios from 'axios'
import { GET_ADMIN } from "../actionTypes/admin.actionType";

const SERVER_BASE_URL ='http://localhost:4000'

export const learnerSignUp = user => async dispatch => {
    console.log("USER",user);
    try {
        const headers = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.post(`${SERVER_BASE_URL}/learner/signUp`, user , {headers : headers})
        console.log(data)
        dispatch({
            type: LEARNER_SIGN_UP,
            payload: data
        })
        if(data.status == 'success') {
            notification.success(
                {message: "Signed Up Successfully"}
            )

        }
        else if (data.status == 'fail') {
            notification.success({
                message:"Error While signing up",
                placement: "topRight",
            })
        }
    }
    catch(error) {
        if(error.response.data.status == 'fail') {
            notification.info({
                message: error.response.data.message,
                placement: "topRight",
            })
        }else if(error.response.data.status == 'error') {
            notification.warning({ 
                message : error.response.data.message,
                placement: "topRight",
            })
        }
    }
}

export const learnerSignIn = user => async dispatch => {
    try {
        const headers = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.post(`${SERVER_BASE_URL}/learner/signIn`, user , {headers : headers})
        dispatch({
            type: LEARNER_SIGN_IN,
            payload: data
        })
        if(data.status == 'success') {
            notification.success(
                {message: "Signed In Successfully"}
            )
        }
    }
    catch(error) {
        if(error.response.data.status  == 'fail') {
            notification.info({
                message: error.response.data.message
            })
        }
        else if(error.response.data.status == 'error') {
            notification.warning({ 
                message : error.response.data.message
            })
        }
    }
}

export const learnerSignOut = () => async (dispatch,getState) => {
    try {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': getState().learnerState.learner.accessToken
            }
        const { data } = await axios.delete(`${SERVER_BASE_URL}/learner/signOut`, {headers : headers})
        dispatch({
            type: LEARNER_SIGN_OUT,
            payload: data
        })
        if(data.status == 'success') {
            notification.success(
                {message: "Signed Out Successfully"}
            )
        }else {
            notification.info({
                message: 'Error While Signing Out'
            })
        }
    }
    catch(error) {
        if(error.response.data.status == 'fail') {
            notification.info({
                message: error.response.data.message
            })
        }
        else if(error.response.data.status == 'error') {
            notification.warning({ 
                message : error.response.data.message
            })
        }
    }
}


export const getUser = () => async (dispatch) => {
    try {
        const token = JSON.parse(localStorage.getItem('token'))
        const headers = {
            'Content-Type': 'application/json',
            'authorization': token
            }
        const { data } = await axios.get(`${SERVER_BASE_URL}/learner/user`, {headers : headers})
        console.log(data)
        if(data.status == 'fail' || data.status === 'error') {
            return localStorage.clear()
        }else if (data.status == 'learner') {
            dispatch({
                type: GET_LEARNER,
                payload: data
            })
        }else if (data.status == 'admin') {
            dispatch({
                type: GET_ADMIN,
                payload: data
            })
        }
    }
    catch(err){
        dispatch({
            type: GET_USER_ERROR,
            payload: err
        })

    }
}
