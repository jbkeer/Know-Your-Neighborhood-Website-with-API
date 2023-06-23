import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './component/AuthContext';
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Home from './component/Home';
import About from './component/About';
import Terms from './component/Terms';
import Login from './component/Login';
import Footer from './component/Footer';
import Header from './component/Header';
import AllUser from './component/AllUser';
import Contact from './component/Contact';
import Register from './component/Register';
import ThankYou from './component/ThankYou';
import AddStore from './component/AddStore';
import AllStore from './component/AllStore';

// const ProtectedRoute = ({ element: Component, ...rest }) => {
//   const { authenticated } = useContext(AuthContext);

//   return (
//     <Route
//     { ...rest }
//     element={authenticated ? <Component/> : <Navigate to="/sign_up" replace />}
//     />
//   );
// };

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      stores: [],
    };
  }

  componentDidMount() { 
  axios
    .get("all_users")
    .then((response) => {
      this.setState({
        users: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });

  axios
    .get("all_stores")
    .then((response) => {
      this.setState({
        stores: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <>
      <AuthProvider>
        <Router>
          <Header />
          <Routes>
              {/* Protected routes */}
              <Route path='/all_stores' element={<AllStore alldata={this.state.stores} />} />
              <Route path='/all_users' element={<AllUser alldata={this.state.users} />} />
              <Route path='/add-store' element={<AddStore /> }/>
              <Route path='/register' element={<Register /> }/>
              <Route path='/thankyou' element={<ThankYou /> }/>
              <Route path='/contact' element={<Contact /> }/>  
              <Route path='/sign_up' element={<Login /> }/> 
              <Route path='/about' element={<About /> }/>
              <Route path='/terms' element={<Terms /> }/> 
              <Route path='/' element={<Home alldata={this.state.stores} /> }/>
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
      </>
    );
  }
}

export default App;
