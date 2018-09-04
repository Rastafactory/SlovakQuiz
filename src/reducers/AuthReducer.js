import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from '../actions/types';
const INITIAL_STATE = {
    email: '',
    password: '',
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload, error: '' };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload, error: '' };
        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload, error: 'Success !' };
        case LOGIN_USER_FAIL:
            return {...state, error: 'Authentication failed.'};
        default:
            return state;
    }
}