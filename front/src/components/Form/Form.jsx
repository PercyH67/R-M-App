import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import styles from './Form.module.css'
import validate from './validate'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/Actions';

const LoginForm = () => {

  const dispatch = useDispatch()
    
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });
    
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    setErrors(
        validate(({
            ...loginData,
            [name]: value
        }))
    )
  };

  const handleSubmit = async(event) => {
    event.preventDefault();

     const data = await dispatch(loginUser(loginData));
     if (data.status === 200) {
         navigate("/home");
         alert(data.data);
         setLoginData({
           email: '',
           password: ''
         });
    } else {
        setShowAlert(true);
      }
  };

  const handleRegisterLinkClick = () => {
    navigate('/register');
  };

  return (
    <div className={styles.container}>
        <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <h3 className="text-blue-400 py-4">Rick And Morty</h3>
        {showAlert && (
            <div className="alert">
                <p>No existe el usuario.</p>
            </div>
        )}
        <div>
            <label>Email:</label>
            <input
            className={styles.email}
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleInputChange}
            required
            />
            <p className={styles.error}>
               {errors.email ? errors.email : null}
            </p>
        </div>
        <div>
            <label>Password:</label>
            <input
            className={styles.password}
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleInputChange}
            required
            />
            <p className={styles.error}>
               {errors.password ? errors.password : null}
            </p>
        </div>
        <div className='flex '>
            <span className='text-primary-500 cursor-pointer' onClick={handleRegisterLinkClick}>
                ¿No tienes una cuenta?    
            </span>
            <button type="submit">Login</button>
        </div>
        </form>
    </div>
  );
};

export default LoginForm;