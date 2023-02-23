import {createSlice} from '@reduxjs/toolkit';
import {authService} from "../services/authService";
import {errorHandler} from "../helpers/errorHandler";
import {addError, addSuccess} from "./alertSlice";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
    },
    reducers: {
        signIn: (state, data) => {
            state.token = data.access_token;
        },
        signOut: (state) => {
            state.token = null;
        },
    },
});

export const {signIn, signOut} = authSlice.actions;

export const login = (payload) => (dispatch) => {
    return authService.login(payload).then((response) => {
            localStorage.setItem('esb_auth_token', response.access_token);
            dispatch(signIn(response));
            return true;
        }, (error) => {
            dispatch(addError(errorHandler.catchErrors(error)));
            return false;
        }
    );
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('esb_auth_token');
    dispatch(signOut());
    return true;
}

export const register = (payload) => (dispatch) => {
    return authService.register(payload).then((response) => {
            dispatch(addSuccess(response.message));
            return true;
        }, (error) => {
            dispatch(addError(errorHandler.catchErrors(error)));
            return false;
        }
    );
}

export const forgotPassword = (payload) => (dispatch) => {
    return authService.forgotPassword(payload).then((response) => {
            dispatch(addSuccess([response.message]));
            return true;
        }, (error) => {
            dispatch(addError(errorHandler.catchErrors(error)));
            return false;
        }
    );
}

export const resetPassword = (payload) => (dispatch) => {
    return authService.resetPassword(payload).then((response) => {
            dispatch(addSuccess([response.message]));
            return true;
        }, (error) => {
            dispatch(addError(errorHandler.catchErrors(error)));
            return false;
        }
    );
}

export default authSlice.reducer
