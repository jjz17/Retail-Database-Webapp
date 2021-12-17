import productService from "../products/product-service";
import productOrderService from "./product-order-service";
import orderService from "../orders/order-service";
const {useState, useEffect} = React;
const {useParams, useHistory} = window.ReactRouterDOM;

const ProductOrderFormEditor = () => {
    const reactRouterHistory = useHistory();
    const {id} = useParams();

    const [productOrder, setProductOrder] = useState({});
    useEffect(() => {
        if (id !== "new") {
            findProductOrderById(id)
        }
    }, []);
    const findProductOrderById = (id) =>
        productOrderService.findProductOrderById(id).then(productOrder => setProductOrder(productOrder));

    // accessing all products
    // const [products, setProducts] = useState([]);
    // useEffect(() => {findAllProducts()}, [])
    // const findAllProducts = () =>
    //     productService.findAllProducts().then(products => setProducts(products))

    // for accessing all orders
    const [orders, setOrders] = useState([])
    useEffect(() => {findAllOrders()}, [])
    const findAllOrders = () =>
        orderService.findAllOrders().then(orders => setOrders(orders))

    const getProductOrderOrder = (id) =>
        orderService.findOrderById(id).then(() => reactRouterHistory.push(`/orders/find/${id}`))
    const getProductOrderProduct = (id) =>
        productService.findProductById(id).then(() => reactRouterHistory.push(`/products/find/${id}`))
    const deleteProductOrder = (id) =>
        productOrderService.deleteProductOrder(id)
            .then(() => history.back())
    const createProductOrder = (productOrder) =>
        productOrderService.createProductOrder(productOrder)
            .then(() => history.back())
    const updateProductOrder = (id, newProductOrder) =>
        productOrderService.updateProductOrder(id, newProductOrder)
            .then(() => history.back())
    return (
        <div>
            <h2>Product Order Editor</h2>
            <label>Id: {productOrder.id} </label>
            <br/>
            <label>Quantity</label>
            <input onChange={(e) =>
                setProductOrder(productOrder =>
                    ({...productOrder, quantity: e.target.value}))}
                   value={productOrder.quantity}/><br/>
            <label>Order ID</label>
            <select onChange={(e) =>
                setProductOrder(productOrder =>
                             ({...productOrder, orderId: e.target.value}))}
                    value={productOrder.orderId}>
                {
                    orders.map((order) => <option key={order.id} value={order.id}> {order.id}</option>)
                }
            </select>
            <label>Product ID</label>
            {/*<select onChange={(e) =>*/}
            {/*    setProductOrder(productOrder =>*/}
            {/*        ({...productOrder, productId: e.target.value}))}*/}
            {/*        value={productOrder.productId}>*/}
            {/*    {*/}
            {/*        products.map((product) => <option key={product.id} value={product.id}> {product.name}</option>)*/}
            {/*    }*/}
            {/*</select>*/}
            <input onChange={(e) =>
                setProductOrder(productOrder =>
                    ({...productOrder, productId: e.target.value}))}
                   value={productOrder.productId}/><br/>
            <br/>
            <button className="btn btn-dark"
                    onClick={() => {
                        history.back()
                    }}>
                Cancel
            </button>
            <button className="btn btn-danger"
                    onClick={() => deleteProductOrder(productOrder.id)}>
                Delete
            </button>
            <button className="btn btn-success"
                    onClick={() => createProductOrder(productOrder)}>
                Create
            </button>
            <button className="btn btn-primary"
                    onClick={() => updateProductOrder(productOrder.id, productOrder)}>
                Save
            </button>
            <button className="btn btn-secondary"
                    onClick={() => getProductOrderOrder(productOrder.orderId)}>
                Order
            </button>
            <button className="btn btn-secondary"
                    onClick={() => getProductOrderProduct(productOrder.productId)}>
                Product
            </button>
            <br/>
        </div>
    )
}

export default ProductOrderFormEditor