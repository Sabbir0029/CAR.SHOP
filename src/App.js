import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import AllProducts from './pages/AllProducts/AllProducts';
import AdminRoute from './pages/Authentication/AdminRoute/AdminRoute';
import LoginHome from './pages/Authentication/Login/LoginHome';
import PrivateRoute from './pages/Authentication/PrivateRoute/PrivateRoute';
import RegisterdHome from './pages/Authentication/Registerd/RegisterdHome';
import BookingCar from './pages/BookingCar/BookingCar';
import ContactUs from './pages/ContactUs/ContactUs';
import AddProdect from './pages/Dashboard/AddProdect/AddProdect';
import Dashboard from './pages/Dashboard/Dashboard';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import Home from './pages/Home/Home/Home';
import MyOrder from './pages/MyOrder/MyOrder';
import Footer from './pages/Shared/Footer/Footer';
import Navigation from './pages/Shared/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Navigation></Navigation>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/ContactUs'>
          <ContactUs></ContactUs>
        </Route>
        <Route path='/AllProducts'>
          <AllProducts></AllProducts>
        </Route>
        <Route path='/myOrder'>
          <MyOrder></MyOrder>
        </Route>
        <PrivateRoute path='/dashboard'>
          <Dashboard></Dashboard>
        </PrivateRoute>
        <AdminRoute path='/makeadmin'>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path='/addprodect'>
          <AddProdect></AddProdect>
        </AdminRoute>
        <PrivateRoute path='/booking/:id'>
         <BookingCar></BookingCar>
       </PrivateRoute>
        <Route path='/login'>
          <LoginHome></LoginHome>
        </Route>
        <Route path='/register'>
          <RegisterdHome></RegisterdHome>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
