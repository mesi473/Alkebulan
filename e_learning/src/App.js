import './App.css';
import Home from './components/Home';
import {BrowserRouter,Route} from 'react-router-dom';
import Register from './components/Register';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Route path="/" component={Home}/>
        <Route path='/register' component={Register}/>
     </div>
    </BrowserRouter>
  );
}

export default App;
