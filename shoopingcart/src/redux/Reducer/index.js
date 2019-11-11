import { combineReducers } from 'redux';
import cartData from './addtoCart'
const rootreducer = combineReducers({
Cart: cartData,
})
export default rootreducer;