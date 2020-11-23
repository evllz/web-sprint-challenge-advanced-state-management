import axios from 'axios';

export const LOADING = 'LOADING';
export const LOADING_SUCCESS = 'LOADING_SUCCESS';
export const LOADING_FAIL = 'LOADING_FAIL';
export const SUBMIT = 'SUBMIT';

export const loadData = () => (dispatch) => {
	dispatch({ type: LOADING });
	axios
		.get('http://localhost:3333/smurfs')
		.then((res) => dispatch({ type: LOADING_SUCCESS, payload: res.data }))
		.catch((err) => dispatch({ type: LOADING_FAIL, payload: err }));
};

export const submitData = (data) => (dispatch) => {
	axios
		.post('http://localhost:3333/smurfs', data)
		.then((res) => dispatch({ type: SUBMIT, payload: res }));
	axios
		.get('http://localhost:3333/smurfs')
		.then((res) => dispatch({ type: LOADING_SUCCESS, payload: res.data }))
		.catch((err) => dispatch({ type: LOADING_FAIL, payload: err }));
};
