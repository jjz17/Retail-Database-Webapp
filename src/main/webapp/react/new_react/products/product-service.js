// declare URL where server listens for HTTP requests
const PRODUCTS_URL = "http://localhost:8080/orm/products"

// retrieve all products from the server
export const findAllProducts = () => {
    return fetch(PRODUCTS_URL +"/find").then(response => response.json())
}


// retrieve a single product by their ID
export const findProductById = (id) => {
    return fetch(`${PRODUCTS_URL}/find/${id}`)
        .then(response => response.json())
}

// delete a product by their ID
export const deleteProduct = (id) => {
    return fetch(`${PRODUCTS_URL}/delete/${id}`, {
        method: "DELETE"
    })
}

// create a new product
export const createProduct = (product) => {
    return fetch(PRODUCTS_URL + "/create",{
        method: 'POST',
        body: JSON.stringify(product),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())
}

// update a product by their ID
export const updateProduct = (id, product) => {
    return fetch(`${PRODUCTS_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(product),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())
}

// retrieve all product orders for a single product by their ID
export const findAllOrdersById = (id) => {
    return fetch(`${PRODUCTS_URL}/find/orders/${id}`)
        .then(response => response.json())
}

// retrieve all product orders for a single product by their ID
export const findAllProductOrdersById = (id) => {
    return fetch(`${PRODUCTS_URL}/find/product_orders/${id}`)
        .then(response => response.json())
}


// export all functions as the API to this service
export default {
    findAllProducts,
    findProductById,
    deleteProduct,
    createProduct,
    updateProduct,
    findAllOrdersById,
    findAllProductOrdersById
}
