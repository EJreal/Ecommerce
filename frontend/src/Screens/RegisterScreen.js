import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';


function SigninScreen(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setrePassword] = useState('');
    const userRegister = useSelector(state => state.userRegister);
    const {loading, userInfo, error} = userRegister;
    const dispatch = useDispatch();

    useEffect(() => {
        if(userInfo){
            props.history.push("/");
        }
        return () => {
            //
        };

    }, [userInfo]);

    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(register(name, email, password));
    }

    return <div className='form'>
    <form onSubmit={submitHandler}>
        <ul className='form-container'>
        <li>
            <h3>Registrarse</h3>
        </li>
        <li>
            {loading && <div>Cargando...</div>}
            {error && <div>{error}</div>}
        </li>
        <li>
            <label htmlFor='name'>
                Nombre
            </label>
            <input type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}/>
        </li>
        <li>
            <label htmlFor='email'>
                Correo
            </label>
            <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
        </li>
        <li>
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
        </li>
        <li>
            <label htmlFor="rePassword">Confirma tu contraseña</label>
            <input type="password" name="rePassword" id="rePassword" onChange={(e) => setrePassword(e.target.value)}/>
        </li>
        <li>
            <button type='submit' className='button primary'>Registrarse</button>
        </li>
        <li>
            Ya tienes una cuenta? <Link to="/signin" className="button secondary text-center">Inicia Sesión</Link>
        </li>

        </ul>

    </form>
        

    </div>
}

export default SigninScreen;
