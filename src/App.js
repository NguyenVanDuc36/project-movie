import './App.css';
import { createBrowserHistory } from 'history';
import { Router, Switch } from 'react-router-dom';
import { HomeTempalte } from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

export const history = createBrowserHistory();
function App() {
  return (
    <Router history={history} >
      <Switch>
        <HomeTempalte path="/contact" exac Component={Contact}/>
        <HomeTempalte path="/register" exac Component={Register}/>
        <HomeTempalte path="/news" exac Component={News}/>
        <HomeTempalte path="/login" exac Component={Login}/>
        <HomeTempalte path="/" exac Component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
