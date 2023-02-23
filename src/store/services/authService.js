import {reqHelper} from "../helpers";

export const authService = {
    login,
    register,
    forgotPassword,
    resetPassword
};

function login(data) {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data),
    };

    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, requestOptions)
        .then(reqHelper.handleResponse)
        .then((response) => {
            return response;
        });
}

function register(data) {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data),
    };

    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, requestOptions)
        .then(reqHelper.handleResponse)
        .then((response) => {
            return response;
        });
}

function forgotPassword(data) {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data),
    };

    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/forgot-password`, requestOptions)
        .then(reqHelper.handleResponse)
        .then((response) => {
            return response;
        });
}

function resetPassword(data) {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data),
    };

    return fetch(`${process.env.NEXT_PUBLIC_API_URL}/reset-password`, requestOptions)
        .then(reqHelper.handleResponse)
        .then((response) => {
            return response;
        });
}
