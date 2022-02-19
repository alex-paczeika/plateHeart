import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import AddEdit from './pages/AddEdit';
import Home from './pages/Home';
import View from './pages/View';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header';
import Search from './pages/Search';
import Start from './pages/Start';
import AuthBase from './AuthBase';

function App() {
  return (

    <BrowserRouter>

      <div className='App'>

        <ToastContainer position='top-center'></ToastContainer>
        <Route exact path="/" component={AuthBase}></Route>
        <div>
          <Header></Header>

          <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/add" component={AddEdit}></Route>
            <Route path="/update/:id" component={AddEdit}></Route>
            <Route path="/view/:id" component={View}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/search" component={Search}></Route>
            <Route exact path="/start" component={Start}></Route>

          </Switch>
        </div>


      </div>
    </BrowserRouter >
  );
}

export default App;
