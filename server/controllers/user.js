// Pour "hash" le password
import bcrypt from 'bcryptjs';

// permet de stocker le user sur une periode de temps
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

export const signin = async (req, res) => {
const {email, password} = req.body;

try {
	const existingUser=await User.findOne({email});

	if (!existingUser) return res.status(404).json({message: "Cet utilisateur n'existe pas je crois :)"})

const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

if(!isPasswordCorrect) return res.status(400).json({message: "mauvais mot de passe"});

const token = jwt.sign({email:existingUser.email, id:existingUser._id}, 'test', {expiresIn:"2h"});

res.status(200).json({result: existingUser, token})

} catch (error) {
	res.status(500).json({message: "qqlchose s'est mal passé"})
}
}


export const signup = async (req, res) => {
	const{email, password, confirmPassword, firstName, lastName} = req.body

	try {
		const existingUser=await User.findOne({email});

		if (existingUser) return res.status(400).json({message: "Cet utilisateur existe déjà"});

		if (password !== confirmPassword) return res.status(400).json({message:"les MdP ne correspondent pas"})

		const hashedPassword = await bcrypt.hash(password, 12);

		const result = await User.create({email, password:hashedPassword, name:`${firstName} ${lastName}`});

		const token = jwt.sign({email:result.email, id:result._id}, 'test', {expiresIn:"2h"});

		res.status(201).json({ result, token });

	} catch (error) {
		    res.status(500).json({ message: "qqlchose ne va pas" });
			console.log(error);

	}
};