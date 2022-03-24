import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import AddEdit from './pages/AddEdit';
import Home from './pages/Home';
import View from './pages/View';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Search from './pages/Search';
import AuthBase from './AuthBase';
import UserRoute from './Routers/UserRoute';
import MyPlate from './pages/MyPlate';
import Setting from './pages/Setting'
import Notifications from './pages/Notifications';
function App() {



  return (

    <BrowserRouter>
      <div className='App'>
        <ToastContainer position='top-center'></ToastContainer>
        <div>



          <Switch>
            <Route exact path="/" component={AuthBase}></Route>
            <UserRoute exact path="/home" component={Home}></UserRoute>
            <UserRoute path="/add" component={AddEdit}></UserRoute>
            <UserRoute path="/update/:id" component={AddEdit}></UserRoute>
            <UserRoute path="/view/:id" component={View}></UserRoute>
            <UserRoute path="/about" component={About}></UserRoute>
            <UserRoute path="/search" component={Search}></UserRoute>
            <UserRoute path="/myPlate" component={MyPlate}></UserRoute>
            <UserRoute path="/setting" component={Setting}></UserRoute>
            <UserRoute path="/notifications" component={Notifications}></UserRoute>
          </Switch>

        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;
