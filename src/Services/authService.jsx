import httpService from "./httpService";
import {apiUrl} from "../config";
import jwtDecode from "jwt-decode";

const apiEndpoint = apiUrl;

const tokenKey = 'token';
httpService.setJwt(getJwt());

export async function login(email,password) {
    try {
        const {data: jwt} = await httpService.post(apiEndpoint + '/login', {
            "email": email,
            "password" : password
        })
        localStorage.setItem(tokenKey, jwt.data);
    }catch (e) {
        throw e;
    }

}
export async function loginWithJwt(jwt) {
    localStorage.setItem(tokenKey, jwt);
}

export function logout(key) {
    localStorage.removeItem(key);
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(tokenKey);
        return  jwtDecode(jwt);
    }catch (e) {
        return null;
    }
}

export function getJwt() {
    return localStorage.getItem(tokenKey);
}

export function fakeLogin(email, password) {
}

export function fakeLogout(key) {
}

export async function changePassword(passwordsToSend) {
    let config = {
        headers: {
            'Authorization': 'Bearer ' + getJwt()
        }
    }
    try {
        const res = await httpService.post(apiEndpoint + '/changePassword', passwordsToSend, config);
    } catch (e) {
        throw e;
    }
}

export default {
    login,
    logout,
    getCurrentUser,
    loginWithJwt,
    getJwt,
    changePassword,
    fakeLogout
};