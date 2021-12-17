import UserList from "./users/user-list";
import UserFormEditor from "./users/user-form-editor";
import OrderList from "./orders/order-list";
import OrderFormEditor from "./orders/order-form-editor";
import ProductList from "./products/product-list";
import ProductFormEditor from "./products/product-form-editor";
import ProductOrderFormEditor from "./product_orders/product-order-form-editor";

const {HashRouter, Route} = window.ReactRouterDOM;
const App = () => {
    return (
        <div className="lists">
            <div className="container-fluid">
                <HashRouter>
                    <Route path={["/users", "/"]} exact={true}>
                        <UserList/>
                    </Route>
                    <Route path="/users/find/:id" exact={true}>
                        <UserFormEditor/>
                    </Route>
                </HashRouter>
            </div>
            <div className="container-fluid">
                <HashRouter>
                    <Route path={["/orders", "/"]} exact={true}>
                        <OrderList/>
                    </Route>
                    <Route path="/orders/find/:id" exact={true}>
                        <OrderFormEditor/>
                    </Route>
                    <Route path="/product_orders/find/id/:id" exact={true}>
                        <ProductOrderFormEditor/>
                    </Route>
                </HashRouter>
            </div>

            <div className="container-fluid">
                <HashRouter>
                    <Route path={["/products", "/"]} exact={true}>
                        <ProductList/>
                    </Route>
                    <Route path="/products/find/:id" exact={true}>
                        <ProductFormEditor/>
                    </Route>
                </HashRouter>
            </div>
        </div>
    );
}

export default App;
