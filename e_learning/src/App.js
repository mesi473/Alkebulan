import './App.css';
import Home from './components/Home';
import {BrowserRouter,Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Route path="/" component={Home}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
