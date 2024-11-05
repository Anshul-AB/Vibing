import { backendUrl } from "./config";

// UNAUTHENTICATED POST REQUEST
export const makeUnauthenticatedPOSTRequest = async (route, body) => {
    try {
        const response = await fetch(backendUrl + route, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const formattedResponse = await response.json();
        return formattedResponse;
    } catch (error) {
        console.error("Error submitting the form:", error);
        throw error; // rethrow the error for further handling in the calling code
    }
};

// AUTHENTICATED POST REQUEST
export const makeAuthenticatedPOSTRequest = async (route, body) => {
    try {
        const token = getToken();
        const response = await fetch(backendUrl + route, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const formattedResponse = await response.json();
        return formattedResponse;
    } catch (error) {
        console.error("Error submitting the form:", error);
        throw error; // rethrow the error for further handling in the calling code
    }

};

// AUTHENTICATED GET REQUEST
export const makeAuthenticatedGETRequest = async (route) => {
    try {
        const token = getToken();
        const response = await fetch(backendUrl + route, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });
    
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const formattedResponse = await response.json();
        return formattedResponse;
    } catch (error) {
        console.error("Error submitting the request:", error);
        throw error; // rethrow the error for further handling in the calling code
    }
};

// GET TOKEN
const getToken =() =>{
    const accessToken = document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
    );
    return accessToken;
}
