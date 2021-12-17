// declare URL where server listens for HTTP requests
const ORDERS_URL = "http://localhost:8080/orm/orders"

// retrieve all orders from the server
export const findAllOrders = () => {
    return fetch(ORDERS_URL + "/find").then(response => response.json())
}


// retrieve a single user by their ID
export const findOrderById = (id) => {
    return fetch(`${ORDERS_URL}/find/${id}`)
        .then(response => response.json())
}


// delete an order by its ID
    export const deleteOrder = (id) => {
        return fetch(`${ORDERS_URL}/delete/${id}`, {
            method: "DELETE"
        })
    }

// create a new order
    export const createOrder = (order) => {
        return fetch(ORDERS_URL + "/create", {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {'content-type': 'application/json'}
        })
            .then(response => response.json())
    }

// update an order by its ID
    export const updateOrder = (id, order) => {
        return fetch(`${ORDERS_URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(order),
            headers: {'content-type': 'application/json'}
        })
            .then(response => response.json())
    }

// retrieve all product orders a single order by their ID
export const findAllProductsById = (id) => {
    return fetch(`${ORDERS_URL}/find/products/${id}`)
        .then(response => response.json())
}

// retrieve all product orders a single order by their ID
export const findAllProductOrdersById = (id) => {
    return fetch(`${ORDERS_URL}/find/product_orders/${id}`)
        .then(response => response.json())
}


// export all functions as the API to this service
    export default {
        findAllOrders,
        findOrderById,
        deleteOrder,
        createOrder,
        updateOrder,
        findAllProductsById,
        findAllProductOrdersById
}
