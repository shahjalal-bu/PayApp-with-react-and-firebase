import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AboutUs from './Components/AboutUs/AboutUs';
import Services from './Components/Services/Services';
import Navbar from './Components/Navbar/Navbar';
import Home from './Home';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import Error from './Components/Error/Error';


const App = () => {
    return (
        <>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <AboutUs />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
        <Footer />
        </>
    );
};

export default App;