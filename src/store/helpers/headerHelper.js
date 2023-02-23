import {useDispatch} from "react-redux";
import {errorHandler} from "./errorHandler";

export const reqHelper = {
    reqHeader,
    reqFormDataHeader,
    handleResponse,
};

function reqHeader() {
    const esbToken = localStorage.getItem("esb_auth_token");
    if (esbToken) {
        return {
            Authorization: "Bearer " + esbToken,
            "Content-Type": "application/json",
        };
    } else {
        return {
            "Content-Type": "application/json",
        };
    }
}

function reqFormDataHeader() {
    const esbToken = localStorage.getItem("esb_auth_token");
    if (esbToken) {
        return {
            Authorization: "Bearer " + esbToken,
        };
    } else {
        return {};
    }
}

function handleResponse(response) {
    return response.text().then((text) => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            return Promise.reject(data);
        }
        return data;
    });
}