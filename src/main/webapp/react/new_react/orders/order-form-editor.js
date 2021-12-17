import orderService from "./order-service"
import userService from "../users/user-service"

const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

const OrderFormEditor = () => {
    const reactRouterHistory = useHistory()
    const {id} = useParams()
    const [order, setOrder] = useState({})
    useEffect(() => {
        if (id !== "new") {
            findOrderById(id)
        }
    }, []);
    const findOrderById = (id) =>
        orderService.findOrderById(id).then(order => setOrder(order))

    // for accessing all users
    const [users, setUsers] = useState([])
    useEffect(() => {
        findAllUsers()
    }, [])
    const findAllUsers = () =>
        userService.findAllUsers()
            .then(users => setUsers(users))

    //for accessing products of an order
    const [products, setProducts] = useState([])
    useEffect(() => {
        if (id !== "new") {
            findAllProducts(id)
        }
    }, [])
    const findAllProducts = (id) =>
        orderService.findAllProductsById(id)
            .then(products => setProducts(products))

    //for accessing product orders of an order
    const [productOrders, setProductOrders] = useState([])
    useEffect(() => {
        if (id !== "new") {
            findAllProductOrders(id)
        }
    }, [])
    const findAllProductOrders = (id) =>
        orderService.findAllProductOrdersById(id)
            .then(productOrders => setProductOrders(productOrders))

    const getOrderUser = (id) =>
        userService.findUserById(id).then(() => reactRouterHistory.push(`/users/find/${id}`))
    const deleteOrder = (id) =>
        orderService.deleteOrder(id)
            .then(() => history.back())
    const createOrder = (order) =>
        orderService.createOrder(order)
            .then(() => history.back())
    const updateOrder = (id, newOrder) =>
        orderService.updateOrder(id, newOrder)
            .then(() => history.back())
    return (
        <div>
            <h2>Order Editor</h2>
            <label>Id</label>
            <input onChange={(e) =>
                setOrder(order =>
                             ({...order, id: e.target.value}))}
                   value={order.id}/><br/>

            <label>User ID</label>
            <select onChange={(e) =>
                setOrder(order =>
                             ({...order, userId: e.target.value}))}
                    value={order.userId}>
                {
                    users.map((user) => <option key={user.id} value={user.id}> {user.id}</option>)
                }
            </select>
            <br/>
            <button className="btn btn-dark"
                    onClick={() => {
                        history.back()
                    }}>
                Cancel
            </button>
            <button className="btn btn-danger"
                    onClick={() => deleteOrder(order.id)}>
                Delete
            </button>
            <button className="btn btn-success"
                    onClick={() => createOrder(order)}>
                Create
            </button>
            <button className="btn btn-primary"
                    onClick={() => updateOrder(order.id, order)}>
                Save
            </button>
            <button className="btn btn-secondary"
                    onClick={() => getOrderUser(order.userId)}>
                User
            </button>
            <br/>

            <ul className="list-group">
                All Products
                {
                    products.map(product =>
                                     <li className="list-group-item"
                                         key={product.id}>

                                         <text>
                                             {"Product ID: " + product.id + " "}
                                             {" Name: "}{product.name}
                                             {", Price: "}{product.price}
                                             {", Quantity: "}{product.quantity}
                                             {" "}
                                         </text>

                                         <button className="btn btn-secondary"
                                                 onClick={() => reactRouterHistory.push(
                                                     `/products/find/${product.id}`)}>
                                             Edit Product
                                         </button>
                                     </li>)
                }
            </ul>

            <button className="btn btn-primary"
                    onClick={() => reactRouterHistory.push("/product_orders/find/id/new")}>
                Add Product Order
            </button>

            <ul className="list-group">
                All Product Orders
                {
                    productOrders.map(productOrder =>
                        <li className="list-group-item"
                            key={productOrder.id}>

                            <text>
                                {"Product Order ID: " + productOrder.id + " "}
                                {" Product ID: "}{productOrder.productId}
                                {", Quantity: "}{productOrder.quantity}
                                {" "}
                            </text>

                            <button className="btn btn-secondary"
                                    onClick={() => reactRouterHistory.push(
                                        `/product_orders/find/id/${productOrder.id}`)}>
                                Edit Product Order
                            </button>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default OrderFormEditor