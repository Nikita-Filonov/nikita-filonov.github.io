import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../src/utils/i18n';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux";
import {createStore} from "redux";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,} from "react-router-dom";
import NavigationNavbar from "./components/navigation/Navbar";
import Sidebar from "./components/navigation/Sidebar";
import meReducer from "./redux/reducer/meReducer";
import Main from "./pages/Main";

const store = createStore(meReducer);

const CustomRoute = () => {
  const [route, setRoute] = useState('/')

  useEffect(() => {
    setRoute(window.location.pathname)
    const listener = store.subscribe(() => setRoute(store.getState().me.route))

    return () => {
      listener()
    }
  }, [])

  return (
    <Router>
      <NavigationNavbar/>
      <div className={'container-fluid'}>
        {route !== '/' ? <Sidebar/> : <Main/>}
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
