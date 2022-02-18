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

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header></Header>
        <ToastContainer position='top-center'></ToastContainer>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/add" component={AddEdit}></Route>
          <Route path="/update/:id" component={AddEdit}></Route>
          <Route path="/view/:id" component={View}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/search" component={Search}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
