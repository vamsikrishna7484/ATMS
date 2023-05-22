import { legacy_createStore as createStore } from 'redux';
import reducer from './UserReducer';

const store=createStore(reducer);

export default store;
