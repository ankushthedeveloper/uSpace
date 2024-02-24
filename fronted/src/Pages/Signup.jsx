import { useState } from "react";
import GenderCheckbox from "../components/genderCheckbox";
import { Link } from "react-router-dom";
import useSignup from "../hooks/useSignup";
const SignUp = () => {
	const{loading,signup}=useSignup();
	const [inputs ,setinputs]=useState({
		fullname: "",
		username: "",
		password: "",
		confirmpassword: "",
		gender: "",
	})
	const onSubmitHandler= async (e)=>{
		e.preventDefault()
        await signup(inputs)
	}

	const handleCheckbox=(gender) => {
		setinputs({
            ...inputs,
            gender,
        });
	}

	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up to <span className='text-blue-500'> uSpace</span>
				</h1>

				<form onSubmit={onSubmitHandler}>
					<div>
						<label className='label p-2'>
							<span className='text-base label-text'>Full Name</span>
						</label>
						<input type='text' placeholder='John Doe' className='w-full input input-bordered  h-10'
						value={inputs.fullname} onChange={(e)=>{setinputs({...inputs,fullname:e.target.value})}} />
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text'>Username</span>
						</label>
						<input type='text' placeholder='johndoe' className='w-full input input-bordered h-10' 
						value={inputs.username} onChange={(e)=>{setinputs({...inputs,username:e.target.value})}} />
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
							value={inputs.password} onChange={(e)=>{setinputs({...inputs,password:e.target.value})}} 
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text '>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10 opacity-0.4'
							value={inputs.confirmpassword} onChange={(e)=>{setinputs({...inputs,confirmpassword:e.target.value})}} 
						/>
					</div>

					<GenderCheckbox onCheckboxChange={handleCheckbox} selectedGender={inputs.gender}/>

					<Link to='/login' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block' href='#'>
						Already have an account?
					</Link>

					<div>
						<button className='btn btn-block btn-sm mt-2 border border-slate-700'
						disabled={loading}>Sign Up</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;