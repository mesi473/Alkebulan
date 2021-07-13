import './App.css';
import Home from './components/Home';
<<<<<<< HEAD
import {BrowserRouter,Route} from 'react-router-dom';
import Register from './components/Register';
=======
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
>>>>>>> 8e99e089d97cdd49a3e2d9fbe3890f29d4ec9359

function App() {
  return (
    <BrowserRouter>
       
      <div className="app">
<<<<<<< HEAD
        <Route path="/" component={Home}/>
        <Route path='/register' component={Register}/>
     </div>
=======
       <Header/>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/contact" exact>
            <Contact/>
          </Route>
        </Switch>
        <Footer/>
      </div>
      
>>>>>>> 8e99e089d97cdd49a3e2d9fbe3890f29d4ec9359
    </BrowserRouter>
  );
}

export default App;
