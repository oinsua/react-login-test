import logo from './logo.svg';
import {Route, Switch} from 'react-router-dom';
import './App_css';
//Importar los componentes
import Home from './page/Home/Home';
import Login from './page/Login/Login';
import Error404 from './page/Error404/Error404';

//Importar los Styled Component
import {Div, Header, Link, H1, Img, Section} from './App_css' 
import Register from './page/Register/Register';

function App() {
  return (
    <>
     <Div>
        <Header>
          <Link to="/">
            <H1>Login</H1>
            <Img src={logo} alt="Logo React"/>
            <H1>Web</H1>
          </Link>
        </Header>
      </Div>
      <main>
        <Section>
        <Switch>
          <Route path="/" exact><Login/></Route>
          <Route path="/home/:username" exact><Home/></Route>
          <Route path="/error404" exact><Error404/></Route>
          <Route path="/register" exact><Register/></Route>
         </Switch>
        </Section>
      </main>
    </>
  );
}

export default App;
