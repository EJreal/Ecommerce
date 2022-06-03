import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';

function RegisterScreen(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const userRegister = useSelector(state => state.userRegister);
    const { loading, userInfo, error } = userRegister;
    const dispatch = useDispatch();


    useEffect(() => {
        if (userInfo) {
            props.history.push("/");
        }
        return () => {
            //
        };

    }, [userInfo]);

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(register(name, email, password));
    }


    return <div className='form'>
        <form onSubmit={submitHandler}>
            <ul className='form-container'>
                <li>
                    <h2>Registrate</h2>
                </li>
                <li>
                    {loading && <div>Cargando...</div>}
                    {error && <div>{error}</div>}
                </li>
                <li>
                    <label htmlFor='name'>
                        Nombre
                    </label>
                    <input type='name' name='name' id='name' onChange={(e) => setName(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor='email'>
                        Correo
                    </label>
                    <input type='email' name='email' id='email' onChange={(e) => setEmail(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor='password'>
                        Contraseña
                    </label>
                    <input type='password' id='password' name='password' onChange={(e) => setPassword(e.target.value)}>
                    </input>
                </li>
                <li>
                    <label htmlFor='rePassword'>
                        Repita la contraseña
                    </label>
                    <input type='Password' id='rePassword' name='rePassword' onChange={(e) => setRePassword(e.target.value)}>
                    </input>
                </li>
                <li>
                    <button type="submit" className='button primary'>Registrarse</button>
                </li>
                <li>
                    ¿Ya tienes una cuenta? <Link to="/signin">Iniciar sesion</Link>
                </li>
            </ul>
        </form>
    </div>
}

export default RegisterScreen;