import React, { Fragment, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Navbar from "./components/layout/Navbar";
import Homepage from "./components/layout/Homepage";
import QLTin from "./components/pages/QLTin"
import Alert from "./components/layout/Alert";
import Tos from "./components/pages/Tos";
import Footer from "./components/layout/Footer";
import Dashboard from "./components/dashboard/Dashboard";
import PrivateRoute from "./components/routing/PrivateRoute";
import CreateProfile from "./components/profile-form/CreateProfile";
import EditProfile from "./components/profile-form/EditProfile";
import About from "./components/pages/About";
import Mobile from "./components/pages/Mobile";
import AddPost from "./components/post/AddPost";
import AddMobile from "./components/post/AddMobile";
import Detail from "./components/pages/Detail";
import BikeDetail from "./components/bike/BikeDetail";
import AddBike from "./components/post/AddBike";
import Bike from "./components/bike/Bike";
import AddFashion from "./components/post/AddFashion";
import FashionDetail from "./components/fashion/FashionDetail";
import Fashion from "./components/fashion/Fashion";
//pet
import AddPet from "./components/post/AddPet";
import PetDetail from "./components/pet/PetDetail";
import Pet from "./components/pet/Pet";
//work
import AddWork from "./components/post/AddWork";
import WorkDetail from "./components/work/WorkDetail";
import Work from "./components/work/Work";
//admin
// import Dashboard from "";"
import BikeIt from "./components/post/BikeIt";
import Tao from "./components/post/testTab"
import TABB from "./components/post/Test"
//Redux
import { Provider } from "react-redux";
import { loadUser } from "./actions/auth";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import { Container } from "semantic-ui-react";
import CheckOutSucess from "./components/pages/TT";
import StripeContainer from "./components/pages/StripeContainer";
import PaymentForm from "./components/pages/PaymentForm";
// import PaymentContent from "./components/pages/Payment";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          {/* <div className="main"> */}
          <Route exact path="/" component={Homepage} />
          <Container size=''>

            <Alert />
            <Switch>

              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/tos" component={Tos} />
              <Route exact path="/about" component={About} />
              <PrivateRoute exact path="/mobile" component={Mobile} />
              <PrivateRoute exact path="/fashion" component={Fashion} />
              <PrivateRoute exact path="/fashion/:id" component={FashionDetail} />
              <PrivateRoute exact path="/mobile/:id" component={Detail} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/bike/:id" component={BikeDetail} />
              <PrivateRoute exact path="/edit-profile" component={EditProfile} />
              <PrivateRoute exact path="/createprofile" component={CreateProfile} />
              <PrivateRoute exact path="/addpost" component={AddPost} />
              <PrivateRoute exact path="/add-mobile" component={AddMobile} />
              <PrivateRoute exact path="/add-bike" component={AddBike} />
              <PrivateRoute exact path="/addfashion" component={AddFashion} />
              <PrivateRoute exact path="/addpet" component={AddPet} />
              <PrivateRoute exact path="/pet" component={Pet} />
              {/* <PrivateRoute exact path="/pet" component={Pet} /> */}
              <PrivateRoute exact path="/bike" component={Bike} />
              <PrivateRoute exact path="/pet/:id" component={PetDetail} />
              <PrivateRoute exact path="/checkoutsucess" component={CheckOutSucess} />
              <PrivateRoute exact path="/pay" component={StripeContainer} />
              <PrivateRoute exact path="/form" component={PaymentForm} />
              <PrivateRoute exact path="/manager-post" component={QLTin} />
              <PrivateRoute exact path="/test" component={Tao} />   
              <PrivateRoute exact path="/testTab" component={TABB} />  
              {/* <PrivateRoute exact path="/payment" component={PaymentContent} /> */}

              {/* work */}
              <PrivateRoute exact path="/addwork" component={AddWork} />
              <PrivateRoute exact path="/work" component={Work} />
              <PrivateRoute exact path="/work/:id" component={WorkDetail} />
              {/*  */}
              <PrivateRoute exact path="/admin" component={Dashboard} />
            </Switch>
          </Container>
          {/* </div> */}

          <Footer />
        </Fragment>
      </Router>

    </Provider>
  );
};

export default App;
