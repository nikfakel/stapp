import {
    APP_CLEAR_ERRS,
    APP_INIT_SUCCESS,
    APP_INIT_FAILURE,
    CURRENCIES_LOAD_REQUEST,
    CURRENCIES_LOAD_SUCCESS,
    CURRENCIES_LOAD_FAILURE
} from '../actions/app'

const initState = {
    isLoading: true,
    token: null,
    me: null,
    loaded: [],
    roles: [],
    err: null
}


export default function app(state = initState, action) {

    switch (action.type) {

    case APP_CLEAR_ERRS:
        return {
            ...state,
            err: null
        }

    case APP_INIT_SUCCESS:
        return {
            ...state,
            isLoading: false
        }

    case APP_INIT_FAILURE:
        return {
            ...state,
            isLoading: false,
            err: action.err
        }
    
    case CURRENCIES_LOAD_SUCCESS:
        return Object.assign({}, state, {loaded: action.data})

    case CURRENCIES_LOAD_FAILURE:
        return Object.assign({}, state, {loaded: action.data})

    default:
        return state
    }

}
