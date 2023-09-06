export const GET_TOKEN = "GET_TOKEN";

export const getToken = (data) => {
    return {
        type : GET_TOKEN,
        payload : data
    }
};