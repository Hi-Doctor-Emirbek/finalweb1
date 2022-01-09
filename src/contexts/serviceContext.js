import React, { useEffect, useReducer, useState } from "react"
import { APIservices } from "../config/const";
import axios from 'axios';
import { calcSubPrice, calcTotalPrice } from '../config/calcPrice';

export const serviceContext = React.createContext()
const INIT_STATE = {
    services: null,
    serviceToEdit: null,
    countOfServices: JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')).services.length : 0,
    cart: 0,
    countOfServicesFavorites: JSON.parse(localStorage.getItem('favorites')) ? JSON.parse(localStorage.getItem('favorites')).services.length : 0,
    favorites: 0,
}
const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "GET_SERVICES":
            return { ...state, services: action.payload }
        case "GET_SERVICES_TO_EDIT":
            return { ...state, serviceToEdit: action.payload }
        case "CLEAR_STATE":
            return { ...state, serviceToEdit: action.payload }
        case 'ADD_AND_DELETE_SERVICE_IN_CART':
            return { ...state, countOfServices: action.payload }
        case 'GET_ALL':
            return { ...state, cart: action.payload }
        case "CLEAR_COUNT":
            return { ...state, countOfServices: action.payload }
        case "ADD_AND_DELETE_SERVICE_IN_FAVORITES":
            return { ...state, countOfServicesFavorites: action.payload }
        case 'GET_ALL_FAVORITES':
            return { ...state, favorites: action.payload }
        case "CLEAR_COUNT_FAVORITES":
            return { ...state, countOfServicesFavorites: action.payload }
        default:
            return state
    }
}

const ServiceContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)




    // ! CREATE 

    const addServices = async (service) => {
        try {
            const response = await axios.post(APIservices, service)
            getServices()
        } catch (e) {
            console.log(e)
        }
    }

    // ! READ  

    const getServices = async () => {
        try {
            let filter = window.location.search
            const response = await axios(`${APIservices}/${filter}`)

            let action = {
                type: "GET_SERVICES",
                payload: response.data
            }
            dispatch(action)
        } catch (e) {
            console.log(e)
        }
    }

    // ! UPDATE  

    const getServicesToEdit = async (id) => {
        try {
            const response = await axios(` 
                ${APIservices}/${id}`)
            let action = {
                type: "GET_SERVICES_TO_EDIT",
                payload: response.data,
            }
            dispatch(action)
        } catch (e) {
            console.log(e)
        }
    }

    const saveEditedServices = async (editedServices) => {
        try {
            const response = await axios.patch(`${APIservices}/${editedServices.id}`, editedServices)
            getServices()
            clearState()
        } catch (e) {
            console.log(e)
        }
    }

    const clearState = () => {
        let action = {
            type: "CLEAR_STATE",
            payload: null
        }
        dispatch(action)
    }
    const deleteService = async (id) => {
        try {
            await axios.delete(`${APIservices}/${id}`)
            getServices()
        } catch (e) {
            console.log(e);
        }
    }

    const [posts, setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(3)
    useEffect(() => {
        if (state.services) {
            const data = state.services
            setPosts(data)
        }
    }, [state.services])


    const numberOfLastPost = currentPage * postsPerPage
    const numberOfFirstPost = numberOfLastPost - postsPerPage
    const currentPosts = posts.slice(numberOfFirstPost, numberOfLastPost)
    const totalPosts = posts.length
    const handlePage = (newPage) => {
        setCurrentPage(newPage)
    }

    const addAndDeleteServiceInCart = (service) => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (!cart) {
            cart = {
                services: [],
                totalPrice: 0,
            }
        } else {

        }
        let product = {
            service: service,
            count: 1,
            subPrice: 0,
        }
        product.subPrice = calcSubPrice(product)
        let checkArr = cart.services.filter(item => {
            return item.service.id === service.id
        })
        if (checkArr.length === 0) {
            cart.services.push(product)
        } else {
            cart.services = cart.services.filter(item => {
                return item.service.id !== service.id
            })

        }
        cart.totalPrice = calcTotalPrice(cart)
        localStorage.setItem('cart', JSON.stringify(cart))
        let action = {
            type: "ADD_AND_DELETE_SERVICE_IN_CART",
            payload: cart.services.length,
        }
        dispatch(action)
    }

    const checkServiceInCart = (id) => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        if (!cart) {
            cart = {
                services: [],
                totalPrice: 0,
            }
        }
        let checkArr = cart.services.filter(item => {
            return item.service.id === id
        })
        if (checkArr.length === 0) {
            return false
        } else {
            return true
        }
    }

    const changeCountService = (count, id) => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        cart.services = cart.services.map(item => {
            if (item.service.id === id) {
                item.count = count
                item.subPrice = calcSubPrice(item)
            }
            return item
        })
        cart.totalPrice = calcTotalPrice(cart)
        localStorage.setItem('cart', JSON.stringify(cart))
        getAll()
    }
    const getAll = () => {
        let cart = JSON.parse(localStorage.getItem('cart'))
        dispatch({
            type: 'GET_ALL',
            payload: cart,
        })
    }
    const clearCountOfServices = () => {
        dispatch({
            type: "CLEAR_COUNT",
            payload: 0
        })
    }
    // конец 

    const addAndDeleteServiceInFavorites = (service) => {
        let favorites = JSON.parse(localStorage.getItem('favorites'))
        if (!favorites) {
            favorites = {
                services: [],
            }
        } else {

        }
        let product = {
            service: service,
            count: 1,
        }
        let checkArr = favorites.services.filter(item => {
            return item.service.id === service.id
        })
        if (checkArr.length === 0) {
            favorites.services.push(product)
        } else {
            favorites.services = favorites.services.filter(item => {
                return item.service.id !== service.id
            })
        }
        localStorage.setItem('favorites', JSON.stringify(favorites))
        let action = {
            type: "ADD_AND_DELETE_SERVICE_IN_FAVORITES",
            payload: favorites.services.length,
        }
        dispatch(action)
    }

    const checkServiceInFavorites = (id) => {
        let favorites = JSON.parse(localStorage.getItem('favorites'))
        if (!favorites) {
            favorites = {
                services: [],
                totalPrice: 0,
            }
        }
        let checkArr = favorites.services.filter(item => {
            return item.service.id === id
        })
        if (checkArr.length === 0) {
            return false
        } else {
            return true
        }
    }

    const changeCountServiceFavorites = (count, id) => {
        let favorites = JSON.parse(localStorage.getItem('favorites'))
        favorites.services = favorites.services.map(item => {
            if (item.service.id === id) {
                item.count = count
            }
            return item
        })
        localStorage.setItem('favorites', JSON.stringify(favorites))
        getAllFavorites()
    }

    const getAllFavorites = () => {
        let favorites = JSON.parse(localStorage.getItem('favorites'))
        dispatch({
            type: 'GET_ALL_FAVORITES',
            payload: favorites,
        })
    }
    const clearCountOfServicesFavorites = () => {
        dispatch({
            type: "CLEAR_COUNT_FAVORITES",
            payload: null
        })
    }
    return (<serviceContext.Provider value={
        {
            addServices: addServices,
            getServices: getServices,
            getServicesToEdit: getServicesToEdit,
            saveEditedServices: saveEditedServices,
            deleteService: deleteService,
            handlePage: handlePage,
            addAndDeleteServiceInCart: addAndDeleteServiceInCart,
            changeCountService: changeCountService,
            checkServiceInCart: checkServiceInCart,
            getAll: getAll,
            setCurrentPage: setCurrentPage,
            clearCountOfServices: clearCountOfServices,
            addAndDeleteServiceInFavorites: addAndDeleteServiceInFavorites,
            changeCountServiceFavorites: changeCountServiceFavorites,
            checkServiceInFavorites: checkServiceInFavorites,
            getAllFavorites: getAllFavorites,
            clearCountOfServicesFavorites: clearCountOfServicesFavorites,
            serviceToEdit: state.serviceToEdit,
            services: state.services,
            currentPosts: currentPosts,
            totalPosts: totalPosts,
            postsPerPage: postsPerPage,
            currentPage: currentPage,
            cart: state.cart,
            favorites: state.favorites,
            countOfServices: state.countOfServices,
            countOfServicesFavorites: state.countOfServicesFavorites
        }
    } > {props.children} </serviceContext.Provider>)
}


export default ServiceContextProvider;