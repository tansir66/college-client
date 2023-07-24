import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import image from '../../assets/images/banner/banner1.jpg';

const Login = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [loginError, setLoginError] = useState('');

  const handleLogin = (data) => {
    console.log(data);
  }

  const handleGoogleLogin = () => {
    console.log('hello google user .... working ....');
  }

  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid md:grid-cols-2 gap-10 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img className='w-3/4 rounded' src={image} alt="login_Image" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-lg bg-white py-10 rounded-md">
          <h1 className="text-5xl text-center font-bold text-gray-800">Login</h1>
          <form onSubmit={handleSubmit(handleLogin)} className="card-body space-y-4">
            <div className="form-control">
              <label className="label"><span className="label-text text-2xl">Email</span></label>
              <input type='email' className="input input-bordered w-full" {...register("email", { required: "Email is required", maxLength: { value: 30, message: "Lessthan 30 characters" } })}
              />
              {errors.email && <p className='text-red-600' >{errors.email?.message}</p>}
            </div>

            <div className="form-control">
              <label className="label"><span className="label-text text-2xl">Password</span></label>
              <input type='password' className="input input-bordered w-full " {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be 6 characters" } })}
              />
              <label htmlFor="forgotPassword_model" className="label"><span className="label-text">Forgot Password</span></label>
              {errors.password && <p className='text-red-600' >{errors.password?.message}</p>}
            </div>
            <input className="input input-bordered w-full btn btn-primary" type="submit" value="Login" />

            <div>
              {loginError && <p className='text-red-600' >{loginError}</p>}
            </div>
          </form>
          <p className='my-2 text-center text-gray-600'>New Student <Link to='/registration' className='text-secondary' >Create new account</Link></p>
          <div className='divider my-4'></div>
          <input onClick={handleGoogleLogin} className='btn w-full bg-blue-600 hover:bg-blue-700 text-white' value='CONTINUE WITH GOOGLE' />
        </div>
      </div>
    </div>
  );
};

export default Login;
