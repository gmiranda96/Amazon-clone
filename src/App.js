import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Checkout from './Checkout';
import Payment from './Payment';
import Orders from './Orders';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth } from './Firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51MNhxwHo8ZV7fq6ZqUGA61ci4MSwWn60OOzOqQ6Pikcdpr7Oq5GUUbofkwV1nQv1kfrsa8In2OQVFGjJPF4ODLY300HjxoF56R'
);

function App() {
  
  const [ {}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path='/orders' element={<div><Header /><Orders /></div>} />
          <Route path='/payment' element={<div><Header /><Elements stripe={promise}><Payment /></Elements></div>}  />
          <Route path='/checkout' element={<div><Header /><Checkout /></div>} />
          <Route path='/login' element={<Login />}  />
          <Route path='/' element={<div><Header /><Home /></div>}  />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
