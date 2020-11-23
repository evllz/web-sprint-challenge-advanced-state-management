import React from 'react';
import axios from 'axios';
import {
	LOADING,
	LOADING_SUCCESS,
	LOADING_FAIL,
	SUBMIT,
} from '../actions/index';

const initialSate = {
	smurfs: [],

	isFetching: false,
	error: '',
	post: '',
};

const reducer = (state = initialSate, action) => {
	console.log(state);
	console.log(action.payload);
	switch (action.type) {
		case LOADING:
			return {
				...state,
				isFetching: true,
			};
		case LOADING_SUCCESS:
			return {
				...state,
				smurfs: action.payload,
				isFetching: false,
			};
		case LOADING_FAIL:
			return {
				...state,
				error: action.payload,
				isFetching: false,
			};
		case SUBMIT:
			return {
				...state,
				post: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
