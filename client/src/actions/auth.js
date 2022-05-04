import { AUTH  } from '../constants/actionTypes';
import * as api from '../api';

export const signin=(formData, navigate)=> async (dispatch) => {
try {
	// connexion de l'utilisateur
	navigate.push('/')
} catch (error) {
	console.log(error);
}
};

export const signup=(formData, navigate)=> async (dispatch) => {
	try {
		// creation de l'utilisateur
		navigate.push('/')
	} catch (error) {
		console.log(error);
	}
	}