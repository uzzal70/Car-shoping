import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Componentes/Header/Header';
import
{
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Home from './Componentes/Home/Home';
import Footer from './Componentes/Footer/Footer';
import Login from './Componentes/Login/Login';
import NotFound from './Componentes/NotFound/NotFound';
import Register from './Componentes/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Componentes/PrivateRoute/PrivateRoute';
import Products from './Componentes/Products/Products';
import Purchase from './Componentes/Purchase/Purchase';
import Dashboard from './Componentes/Dashboard/Dashboard';
import PurchaseProducts from './Componentes/Dashboard/PurchaseProducts/PurchaseProducts';

function App()
{
  return (
    <div className="App">
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
            <Route path="/products">
              <Products></Products>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>

            <PrivateRoute path="/purchase/:productId">
              <Purchase></Purchase>
            </PrivateRoute>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/purchaseproducts">
              <PurchaseProducts></PurchaseProducts>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
