import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
       
      <div className="app">
       <Header/>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/contact" exact>
            <Contact/>
          </Route>
        </Switch>
        <Footer/>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
