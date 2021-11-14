import React from 'react';
import useAuth from '../../Hooks/useAuth';
import './Dashboard.css';
import DashboardHome from './DashboardHome/DashboardHome';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import Products from '../Products/Products';
import AddProduct from './AddProduct/AddProduct';
import AdminRoute from './AdminRoute/AdminRoute';
import Pay from './Pay/Pay';
import ManageProducts from './ManageProducts/ManageProducts';
import ManageOrders from './ManageOrders/ManageOrders';
import ReviewInput from './Review/ReviewInput';
import
{
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";

const Dashboard = () =>
{
    let { path, url } = useRouteMatch();
    const { admin, logOut } = useAuth();

    return (
        <>
            <div className="d-flex" id="wrapper">
                {/* <!-- Sidebar --> */}
                <div className="bg-white" id="sidebar-wrapper">
                    <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">Auto~Express</div>
                    <div className="list-group list-group-flush my-3">

                        <Link to={`${url}`} className="list-group-item list-group-item-action bg-transparent second-text text-info fw-bold"><i
                            className="fas fa-tachometer-alt me-2"></i>My orders
                        </Link>
                        <Link to="/products" className="list-group-item list-group-item-action bg-transparent second-text active"><i
                            className="fas fa-shopping-cart me-2"></i>Products
                        </Link>
                        <Link to={`${url}/pay`} className="list-group-item list-group-item-action bg-transparent second-text active"><i
                            className="fas fa-dollar-sign me-2"></i>Payment
                        </Link>
                        <Link to={`${url}/reviewinput`} className="list-group-item list-group-item-action bg-transparent second-text active"><i
                            className="fas fa-star me-2"></i>Review
                        </Link>

                        <h2> Admin </h2>
                        {
                            admin && <div>
                                <Link to={`${url}/makeAdmin`} className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i class="fas fa-user-lock"></i>&nbsp; Make Admin</Link>

                                <Link to={`${url}/addProduct`} className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                                    className="fas fa-gift me-2"></i> Add Product</Link>

                                <Link to={`${url}/manageorder`} className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                                    className="fas fa-gift me-2"></i>Manage All Order</Link>

                                <Link to={`${url}/manageproducts`} className="list-group-item list-group-item-action bg-transparent second-text fw-bold"><i
                                    className="fas fa-gift me-2"></i>Manage Products</Link>
                            </div>
                        }

                        <button onClick={logOut} className="list-group-item list-group-item-action bg-transparent text-danger fw-bold"><i
                            className="fas fa-power-off me-2"></i>Logout</button>
                    </div>
                </div>

                {/* <!-- /#sidebar-wrapper --> */}

                {/* <!-- Page Content --> */}
                <div id="page-content-wrapper">
                    <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
                        <div className="d-flex align-items-center">
                            <i className="fas fa-align-left primary-text fs-4 me-3" id="menu-toggle"></i>
                            <h2 className="fs-2 m-0">Dashboard</h2>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </nav>
                    <Switch>
                        <Route exact path={path}>
                            <DashboardHome></DashboardHome>
                        </Route>
                        <Route path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>
                        <Route path={`${path}/reviewinput`}>
                            <ReviewInput></ReviewInput>
                        </Route>
                        <Route path="/products">
                            <Products></Products>
                        </Route>
                        <AdminRoute path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <AdminRoute path={`${path}/addproduct`}>
                            <AddProduct></AddProduct>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageproducts`}>
                            <ManageProducts></ManageProducts>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageorder`}>
                            <ManageOrders></ManageOrders>
                        </AdminRoute>
                    </Switch>

                </div>
            </div>
        </>
    );
};

export default Dashboard;


