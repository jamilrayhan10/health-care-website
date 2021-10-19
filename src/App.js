import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Shared/Header/Header";
import Home from "./Components/Home/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import ServicesDetails from "./Components/ServicesDetails/ServicesDetails";
import Login from "./Components/Login/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Blogs from "./Components/Blogs/Blogs";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Shared/Footer/Footer";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/blogs">
              <Blogs></Blogs>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <PrivateRoute path="/servicesDetails/:name">
              <ServicesDetails></ServicesDetails>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <SignUp></SignUp>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
