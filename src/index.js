import React from 'react';
import ReactDOM from 'react-dom/client';
import Create from './Create';
import  {BrowserRouter as Router , Route, Switch} from 'react-router-dom'



import App from './App'; 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Switch>
    <Route exact path="/" component={App}/>
    <Route  path="/Create" component={Create}/>
    </Switch>
    
    </Router>
  </React.StrictMode>

);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

