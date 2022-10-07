import React from 'react';
import { Link } from 'react-router-dom'
import {createUserWithEmailAndPassword} from "firebase/auth"
import { auth } from '../firebase'

import { useNavigate } from "react-router-dom";


const Register = () => {
	let navigate = useNavigate();
	const [email, SetEmail] = React.useState('')
	const [Password, SetPassword] = React.useState('')
		const [error, SetError] = React.useState('')
			const [Confirm_register, SetConfirm_register] = React.useState('')
		const HandleSubmitRegister = (e) => {
		e.preventDefault()
		createUserWithEmailAndPassword(auth, email, Password)
  .then((userCredential) => {
    const user = userCredential.user;
		SetConfirm_register('You account register!')
	setTimeout(() => { 	return navigate("/") }, 5000);
  })
  .catch((error) => {
    const errorMessage = error.message;
		SetError(errorMessage)
  });
	}
	
	return (
		<div className='Main__wraper_Content'>
				<div className='Form_wrapper'>
			<form onSubmit={HandleSubmitRegister}>
				<h1 className='Form_name_text'>Register</h1>
					<input type={'text'} placeholder={'Name'} value={email} onChange={event => SetEmail(event.target.value)}/>
				<input type={'password'} placeholder={'password'} value={Password} onChange={event => SetPassword(event.target.value)}/>
				{error && 	<p className='Error_message_in_register_and_login_page'>{error}</p>}
				{Confirm_register && 	<p className='Happy_message'>{Confirm_register}</p>}
				<button type={'submit'} className='Btn_in_form'>Register</button>
				<Link className='Link_in_Register_and_login_page' to={"/Login"}> Go to Login</Link>
			</form>
			
			</div>
		</div>
	);
};

export default Register;
