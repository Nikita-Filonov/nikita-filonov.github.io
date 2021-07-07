import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import {createStore} from "redux";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {NavigationNavbar} from "./components/navigation/Navbar";
import {Sidebar} from "./components/navigation/Sidebar";
import {Empty} from "./components/other/Empty";
import meReducer from "./redux/reducer/meReducer";

const store = createStore(meReducer);

const CustomRoute = () => {

  return (
    <Router>
      <NavigationNavbar/>
      <Sidebar/>
      <div>
        <Switch>
          <Route path="/" exact component={Empty}/>
          <Route path="/about" exact component={Empty}/>
          <Route path={'/education'} exact component={Empty}/>
        </Switch>
      </div>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CustomRoute/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
