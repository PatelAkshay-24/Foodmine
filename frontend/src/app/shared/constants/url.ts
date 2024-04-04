// const BASE_URL = "https://foodmine-server.vercel.app"
const BASE_URL = "http://localhost:5000"

//Food Page Api url
export const FOOD_URL = BASE_URL + '/api/foods';
export const Food_TAG_URL = BASE_URL + '/api/foods/tags';
export const FOOD_BY_SEARCH_URL = BASE_URL + '/api/foods/search/'
export const FOOD_BY_TAG_URL = BASE_URL + '/api/foods/tags/'
export const FOOD_BY_ID_URL = BASE_URL + '/api/foods/'

//Login Page Apo Url
export const USER_LOGIN_URL = BASE_URL + '/api/users/login'
//Registration Api Url
export const USER_REGISTER_URL = BASE_URL + '/api/users/register'

//order Page Api Url
export const ORDER_URL = BASE_URL + '/api/orders'
export const ORDER_CREATE_URL = BASE_URL + '/api/orders/create'
export const ORDER_NEW_FOR_CREATE_USER_URL = BASE_URL + '/api/orders/newOrderForCurrentUser'
export const ORDER_PAY_URL = BASE_URL + '/api/orders/pay'
export const ORDER_TRACK_URL = BASE_URL + 'api/orders/track/'