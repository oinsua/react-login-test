import React, {useState} from 'react';
import {Helmet} from 'react-helmet';
import {useHistory} from 'react-router-dom';
import {SingIn} from '../../service/getSingIn';
import Modal from '../../components/Modal/Modal';


//Importando los Styled Component
import {Form, DivInput, Input, Button, Span, SpanLink, SpanError} from './styled';
 
const Login = () => {
    
    const history = useHistory(); //Se crea el objeto para la navegacion
    const [user, setUser] = useState({username: '', password: ''}); //Inicializo el estado con user y password
    const [showModal, setShowModal] = useState(false);
    
    const handleClick = () => {
        return setShowModal(true);
      };
    
      const handleClose = () => {
        setShowModal(false);
      };
    
    const [error, setError] = useState('');
   const handleInputChange = (e) => {
          setUser({
              ...user,
              [e.target.name]: e.target.value
          })
   }

   const [jwt, setJwt] = useState('');

   const handleSubmit = (e) => {
       e.preventDefault();

       SingIn({username: user.username, password: user.password})
        .then(jwt => setJwt(jwt))
        .catch( error => 
            setError('User not exist or password incorrect!')
        )
       if(error !== ''){ //Validar que los campos no estan vacio
            history.push(`/home/${user.username}`);
            localStorage.setItem(user.username, jwt);        
    }
   }

    return (
        <>
            <Helmet>
              <title>Login_Web</title>
              <meta name="application-name" content="login_Web"/>
              <meta name="description" content="login_Web"/>
              <meta name="google" content="notranslate"/>
            </Helmet>
            <Form onSubmit={handleSubmit}>
                <DivInput>
                    <Input placeholder="Your username" name="username" type="text" onChange={handleInputChange} value={user.username}/>
                    <Input placeholder="Your Password " name="password" type="password" onChange={handleInputChange} value={user.password}/>
                    <Button name="login" type="submit">LOGIN</Button>
                </DivInput>
                <Span>You can Register at this Web Application</Span>
               <SpanLink onClick={handleClick}>Register</SpanLink>
                {showModal && (
                    <Modal onClose={handleClose}>
                    </Modal>
                  )}
              <SpanError>{error}</SpanError>
            </Form>
            
        </>
    )
}

export default Login
