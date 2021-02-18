import React, {useState} from 'react'
import ReactDOM from 'react-dom';
import {SingUp} from '../../service/getSingup';
import {useHistory} from 'react-router-dom';

import './Modal.css';

function Modal ({ children, onClose }) {
    const history = useHistory(); //Se crea el objeto para la navegacion
    const [user, setUser] = useState( //Se inicializa el objeto user
                                     {username: '', 
                                     password: '',
                                     email: '',
                                     name: '',
                                     phone: ''
                                    }); 
    const [jwt, setJwt] = useState('');
    const [error, setError] = useState('');
   
    const handleInputChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        SingUp({
                 username: user.username, 
                 password: user.password, 
                 email: user.email, 
                 name: user.name, 
                 phone: user.phone})
        .then(jwt => setJwt(jwt))
        .catch( error => 
            setError('User not exist or password incorrect!')
        )

        if(error !== ''){ //Validar que los campos no estan vacio
            history.push(`/home/${user.username}`);
            localStorage.setItem(user.username, jwt);        
    }
    }

  return <div className='modal'>
            <div className='modal-content'>
            <button className='btn' onClick={onClose}>X</button>
            {children}
            <h3>User Register</h3>
            <div>
                <form onSubmit={handleSubmit} className='modal-form'>
                    <input placeholder="Your username" name="username" type="text" onChange={handleInputChange} value={user.username} />
                    <input placeholder="Your Password " name="password" type="password" onChange={handleInputChange} value={user.password}/>
                    <input placeholder="Your email " name="email" type="text" onChange={handleInputChange} value={user.email}/>
                    <input placeholder="Your name " name="name" type="text" onChange={handleInputChange} value={user.name}/>
                    <input placeholder="Your phone " name="phone" type="text" onChange={handleInputChange} value={user.phone}/>
                    <button name="login" type="submit" className="modal-button">SEND</button>
                </form>
            </div>
            </div>
        </div>
}

export default function ModalPortal ({ children, onClose }) {
  return ReactDOM.createPortal(
    <Modal onClose={onClose}>
      {children} 
    </Modal>,
    document.getElementById('root')
  )
}