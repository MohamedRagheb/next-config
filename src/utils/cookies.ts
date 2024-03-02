import {cookies}  from 'next/headers'
const cookiesContainer = cookies()
type CookieSetReturnType = ReturnType<typeof cookiesContainer.set>;
type CookieDeleteReturnType = ReturnType<typeof cookiesContainer.delete>;

interface cookieType {
    key:string,
    value:string
}
/**
 *
 * @param key {string}
 * @returns {string}
 */
export const getCookie = (key:string):any =>{
        return cookiesContainer.get(key)
}

/**
 *
 * @param cookie {cookieType}
 * @returns {CookieSetReturnType}
 */
export const setCookie = ({key,value}:cookieType):CookieSetReturnType =>{
    return cookiesContainer.set({
        name:key,
        value,
        httpOnly: true,
        path:'/'
    })
}
/**
 * @param key {string}
 * @returns {boolean}
 *
 */
export const checkIfThisCookieThere = (key:string):boolean =>{
    return cookiesContainer.has(key)
}

/**
 *
 * @param key {string}
 * @returns {CookieDeleteReturnType}
 */
export const deleteCookie = (key:string):CookieDeleteReturnType =>{
    return cookiesContainer.delete(key)
}
