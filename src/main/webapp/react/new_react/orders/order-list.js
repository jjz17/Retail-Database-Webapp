import orderService from "./order-service"

const {useState, useEffect} = React;
const {Link, useHistory} = window.ReactRouterDOM;

const OrderList = () => {
    const history = useHistory()
    const [orders, setOrders] = useState([])
    useEffect(() => {
        findAllOrders()
    }, [])
    const findAllOrders = () =>
        orderService.findAllOrders()
            .then(orders => setOrders(orders))
    return (
        <div>
            <h2>Order List</h2>
            <button className="btn btn-primary"
                    onClick={() => history.push("/orders/find/new")}>
                Add Order
            </button>
            <ul className="list-group">
                {
                    orders.map(order =>
                        <li className="list-group-item"
                            key={order.id}>

                            <text>
                                {"ID: "}
                            </text>
                            <Link to={`/orders/find/${order.id}`}>
                                {order.id}
                            </Link>
                            <text>
                                {" Customer: "}{order.userId}
                            </text>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default OrderList;