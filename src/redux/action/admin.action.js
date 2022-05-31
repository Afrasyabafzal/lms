import { ADMIN_SIGN_IN, ADMIN_SIGN_UP,ADMIN_SIGN_OUT,GET_ADMIN } from "../actionTypes/admin.actionType";
import { notification } from 'antd'
import axios from 'axios'


const SERVER_BASE_URL ='http://localhost:4000'

export const adminSignUp = (user, navigate) => async dispatch => {
    console.log("USER",user);
    try {
        const headers = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.post(`${SERVER_BASE_URL}/admin/signUp`, user , {headers : headers})
        console.log("DATA",data);
        dispatch({
            type: ADMIN_SIGN_UP,
            payload: data
        })
        if(data.status === 'success'){
            notification.success({
                message: 'Success',
                description: 'Admin created successfully',
                duration: 2
            })
            navigate('/signIn')
        }else {
            notification.error({
                message: 'Error',
                description: 'Admin not created',
                duration: 2
            })
        }
    } catch (error) {
        console.log("ERROR",error);
        if(error.response.data.status === 'error'){
            notification.error({
                message: 'Error',
                description: error.response.data.message,
                duration: 2
            })
        }else if(error.response.data.status === 'fail'){
            notification.error({
                message: 'Error',
                description: error.response.data.message,
                duration: 2
            })
        }
    }
}

export const adminSignIn = (user, navigate) => async dispatch => {
    console.log("USER",user);
    try {
        const headers = {
            'Content-Type': 'application/json'
        }
        const { data } = await axios.post(`${SERVER_BASE_URL}/admin/signIn`, user , {headers : headers})
        console.log("DATA",data);
        dispatch({
            type: ADMIN_SIGN_IN,
            payload: data
        })
        if(data.status === 'success'){
            notification.success({
                message: 'Success',
                description: 'Admin signed in successfully',
                duration: 2
            })
            navigate('/adminDashboard')
        }else {
            notification.error({
                message: 'Error',
                description: 'Admin not signed in',
                duration: 2
            })
        }
    } catch (error) {
        console.log("ERROR",error);
        if(error.response.data.status === 'error'){
            notification.error({
                message: 'Error',
                description: error.response.data.message,
                duration: 2
            })
        }else if(error.response.data.status === 'fail'){
            notification.error({
                message: 'Error',
                description: error.response.data.message,
                duration: 2
            })
        }
    }
}

export const adminSignOut = (navigate) => async (dispatch,getState) => {
    console.log("USER",getState().adminState.admin.accessToken);
    try {
        const headers = {
            'Content-Type': 'application/json',
            'authorization': getState().adminState.admin.accessToken
        }
        const { data } = await axios.delete(`${SERVER_BASE_URL}/admin/signOut`,  {headers : headers})
        console.log("DATA",data);
        dispatch({
            type: ADMIN_SIGN_OUT,
            payload: data
        })
        if(data.status === 'success'){
            notification.success({
                message: 'Success',
                description: 'Admin signed out successfully',
                duration: 2
            })
            navigate('/admin')
        }else {
            notification.error({
                message: 'Error',
                description: 'Admin not signed out',
                duration: 2
            })
        }
    } catch (error) {
        if(error.response.data.status === 'error'){
            notification.error({
                message: 'Error',
                description: error.response.data.message,
                duration: 2
            })
        }else if(error.response.data.status === 'fail'){
            notification.error({
                message: 'Error',
                description: error.response.data.message,
                duration: 2
            })
        }
    }
}




