import './App.css';
import MyAccount from './Components/Pages/My-Account/MyAccount';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddYourVehicle from './Components/Pages/AddYourVehicle/AddYourVehicle';
import OnlineBooking from './Components/Pages/OnlineBooking/OnlineBooking';
import OurService from './Components/Pages/OurService/OurService';
import Login from './Components/Pages/Login/Login';
import SignUp from './Components/Pages/SignUp/SignUp';
import ContactUs from './Components/Pages/ContactUs/ContactUs';
import Home from './Components/Pages/Home/Home';
import Dashboard from './Components/Pages/AdminPage/Dashboard/Dashboard';
import AdminLogin from './Components/Pages/AdminPage/AdminLogin/AdminLogin';

function App() {
  return (

    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/MyAccount/:id" render={(props) => <MyAccount {...props} />}>
            {/* <MyAccount {...props}/> */}
          </Route>
          <Route path="/ContactUs">
            <ContactUs />
          </Route>
          <Route path="/OnlineBooking/:id">
            <OnlineBooking />
          </Route>
          <Route path="/OurService">
            <OurService />
          </Route>
          <Route path="/AddYourVehicle">
            <AddYourVehicle />
          </Route>
           <Route path="/Login" >
            <Login />
          </Route>
           <Route path="/SignUp">
            <SignUp />
          </Route>
          <Route path="/Admin/AdminLogin">
            <AdminLogin />
          </Route>
          <Route path="/Admin/Dashboard">
            <Dashboard />
          </Route>
        </Switch>


      </Router>




    </div>
  );
}

export default App;
