import axios from 'axios'

export const APP_CLEAR_ERRS = 'APP_CLEAR_ERRS'
export const APP_INIT_REQUEST = 'APP_INIT_REQUEST'
export const APP_INIT_SUCCESS = 'APP_INIT_SUCCESS'
export const APP_INIT_FAILURE = 'APP_INIT_FAILURE'

export const appClearErrs = () => {
    return {
        type: APP_CLEAR_ERRS
    }
}

const appInitRequest = () => {
    return {
        type: APP_INIT_REQUEST
    }
}

const appInitSuccess = () => {
    return {
        type: APP_INIT_SUCCESS
    }
}

// eslint-disable-next-line no-unused-vars
const appInitFailure = (err = 'Something went wrong') => {
    return {
        type: APP_INIT_FAILURE,
        err
    }
}

export const doAppInit = () => {
    return function (dispatch) {

        dispatch(appInitRequest())

        //Emulate async operation,
        //here you may call XHR to your backend
        //and dispatch `appInitSuccess` or `appInitFailure` actions
        setTimeout(() => (dispatch(appInitSuccess())), 1000)

    }
}

export const CURRENCIES_LOAD_REQUEST = 'CURRENCIES_LOAD_REQUEST'
export const CURRENCIES_LOAD_SUCCESS = 'CURRENCIES_LOAD_SUCCESS'
export const CURRENCIES_LOAD_FAILURE = 'CURRENCIES_LOAD_FAILURE'

function currenciesLoadRequest(data) {
    return {
        type: CURRENCIES_LOAD_REQUEST,
        data
    }
}

function currenciesLoadSuccess(data) {
    return {
        type: CURRENCIES_LOAD_SUCCESS,
        data
    }
}

function currenciesLoadFailure(err = 'Что-то пошло не так') {
    return {
        type: CURRENCIES_LOAD_FAILURE,
        err
    }
}

export const doCurrenciesLoad = () => (dispatch) => {
    dispatch(currenciesLoadRequest())

    return axios.get('https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=BTC,USD,EUR,XRP,ETH,XMR,ZEC,NEO,ICN,XEM,CTO', 'GET').then((data) => {
        if (data.detail) {
            dispatch(currenciesLoadFailure(data.detail))
            return
        }
        dispatch(currenciesLoadSuccess(data))
        return

    }, (error) => {
        dispatch(currenciesLoadFailure(error.message))
    })
}