import { AUTH  } from '../constants/actionTypes';
import * as api from '../api';

export const signin=(formData, navigate)=> async (dispatch) => {
try {
	// connexion de l'utilisateur
const {data} = await api.signIn(formData);

dispatch({type:AUTH, data });

	navigate.push('/')
} catch (error) {
	console.log(error);
}
};

export const signup=(formData, navigate)=> async (dispatch) => {
	try {
		// creation de l'utilisateur
		const {data} = await api.signUp(formData);

		dispatch({type:AUTH, data });

		navigate.push('/')
	} catch (error) {
		console.log(error);
	}
	}