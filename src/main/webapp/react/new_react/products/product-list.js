import productService from "./product-service"
const { useState, useEffect } = React;
const {Link, useHistory} = window.ReactRouterDOM;

const ProductList = () => {
    const history = useHistory()
    const [products, setProducts] = useState([])
    useEffect(() => {
        findAllProducts()
    }, [])
    const findAllProducts = () =>
        productService.findAllProducts()
            .then(products => setProducts(products))
    return(
        <div>
            <h2>Product List</h2>
            <button className="btn btn-primary"
                    onClick={() => history.push("/products/find/new")}>
                Add Product
            </button>
            <ul className="list-group">
                {
                    products.map(product =>
                        <li className="list-group-item"
                            key={product.id}>
                            <text>
                                {"ID: "}
                            </text>
                            <Link to={`/products/find/${product.id}`}>
                                {product.id}
                            </Link>
                            <text>
                                {" Name: "}{product.name}{", Price: $"}{product.price}
                                {", Quantity: "}{product.quantity}
                            </text>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default ProductList;