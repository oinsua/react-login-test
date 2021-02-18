import React, {useState} from 'react';
import {Helmet} from 'react-helmet';
import {useHistory, Link} from 'react-router-dom';

//Importando los Styled Component
import {Form, DivInput, Input, Button, Span, SpanLink} from './styled';
 
const Login = () => {
    
    const history = useHistory(); //Se crea el objeto para la navegacion
    const [user, setUser] = useState({username: '', password: ''}); //Inicializo el estado con user y password

   const handleInputChange = (e) => {
          setUser({
              ...user,
              [e.target.name]: e.target.value
          })
   }

   const handleSubmit = (e) => {
       e.preventDefault();
       console.log('datos del user', user);
       if(user.username !== '' && user.password !== ''){ //Validar que los campos no estan vacio
        
        history.push(`/home/:${user.name}`);
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
               <SpanLink> <Link to="/register">Register</Link> </SpanLink>
            </Form>
            
        </>
    )
}

export default Login
