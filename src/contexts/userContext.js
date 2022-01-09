import React, { useReducer } from "react";
import axios from "axios";
import { APIusers } from "../config/const";
export const userContext = React.createContext();

const INIT_STATE = {
    doctors: null,
    user: null,
    doctor: null,
    failedLogin: null,
};

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            return { ...state, user: action.payload };
        case "FAILED_LOGIN":
            return { ...state, failedLogin: action.payload };
        case "LOGOUT_USER":
            return { ...state, user: action.payload };
        case "GET_USER":
            return { ...state, user: action.payload }
            case "GET_DOCTOR":
                return { ...state, doctor: action.payload }
        case "CLEAR_STATE":
            return { ...state, phone: action.payload }
        case "GET_ALL_DOCS":
            return { ...state, doctors: action.payload }
        default:
            return state;
    }
};

const UserContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    const signUpUser = async (username, password, email, type, age, specialty, education, experience) => {
        try {
            let res = await axios(APIusers);
            // console.log(type)
            let user = res.data.find((user) => user.username === username);
            if (user === undefined) {
                try {
                    let { data } = await axios.post(APIusers, {
                        username,
                        password,
                        email,
                        type,
                        age,
                        experience,
                        specialty,
                        education,
                    });
                    dispatch({
                        type: "LOGIN_USER",
                        payload: data,
                    });
                    dispatch({
                        type: "FAILED_LOGIN",
                        payload: false,
                    });
                } catch (e) {
                    console.log(e);
                }
            } else {
                dispatch({
                    type: "FAILED_LOGIN",
                    payload: true,
                });
            }
        } catch (e) {
            console.log(e);
        }
    };
    const getAllDocs = async () => {
        try {
            let { data } = await axios(APIusers)
            let result = data.filter(item => {
                return item.type === 'doctor'
            })
            // console.log(result)
            dispatch({
                type: 'GET_ALL_DOCS',
                payload: result,
            })
        } catch (e) {
            console.log(e);
        }
    }
    const getUser = async (id) => {
        try {
            // console.log(user)
            let response = await axios(APIusers + '/' + id);
            dispatch({
                type: "GET_USER",
                payload: response.data,
            });
        } catch (e) {
            console.log(e)
        }
    }
    const getDoctor = async(id) =>{
        try{
            let response = await axios(APIusers + '/' +id)
            dispatch({
                type: "GET_DOCTOR",
                payload: response.data,
            })
        }catch(e){
            console.log(e);
        }
    }
    const editDoctor = async (editedUser, user) => {
        try {
            await axios.patch(APIusers + '/' + user.id, editedUser)

            getDoctor(user.id)
            clearState()
        } catch (e) {
            console.log(e)
        }
    }
    const clearState = () => {
        dispatch({
            type: "CLEAR_STATE",
            payload: null,
        })
    }
    const deleteUser = async (id) => {
        try {
            await axios.delete(APIusers + '/' + id)
        } catch (e) {
            console.log(e)
        }
    }
    const loginUser = async (username, password) => {
        try {
            let res = await axios(APIusers);
            let user = res.data.find((user) => user.username === username);
            let bool = false;
            if (user) {
                bool = user.password === password ? true : false;
            }
            if (bool) {
                dispatch({
                    type: "LOGIN_USER",
                    payload: user,
                });
                dispatch({
                    type: "FAILED_LOGIN",
                    payload: false,
                });
            } else {
                dispatch({
                    type: "FAILED_LOGIN",
                    payload: true,
                });
            }
        } catch (e) {
            console.log(e);
        }
    };

    const setUser = (user) => {
        dispatch({
            type: "LOGIN_USER",
            payload: user,
        });
    };

    const logoutUser = () => {
        dispatch({
            type: "LOGOUT_USER",
            payload: null,
        });
    };

    return (
        <userContext.Provider
            value={{
                signUpUser,
                loginUser,
                logoutUser,
                setUser,
                editDoctor,
                deleteUser,
                getUser,
                clearState,
                getAllDocs,
                getDoctor,
                doctors: state.doctors,
                user: state.user,
                doctor: state.doctor,
                state,

            }}
        >
            {props.children}
        </userContext.Provider>
    );
};

export default UserContextProvider;