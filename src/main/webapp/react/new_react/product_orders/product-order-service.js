// declare URL where server listens for HTTP requests
const PRODUCT_ORDERS_URL = "http://localhost:8080/orm/product_orders"

// retrieve all orders from the server
export const findAllProductOrders = () => {
    return fetch(PRODUCT_ORDERS_URL + "/find").then(response => response.json())
}


// retrieve a single user by their ID
export const findProductOrderById = (id) => {
    return fetch(`${PRODUCT_ORDERS_URL}/find/id/${id}`)
        .then(response => response.json())
}
// // find order(s) by a given user
// export const findOrdersByUser = (userId) => {
//     return fetch(`${USERS_URL}/${userId}/orders`)
//         .then(response => response.json())

// delete an order by its ID
    export const deleteProductOrder = (id) => {
        return fetch(`${PRODUCT_ORDERS_URL}/delete/${id}`, {
            method: "DELETE"
        })
    }

// create a new order
    export const createProductOrder = (productOrder) => {
        return fetch(PRODUCT_ORDERS_URL + "/create", {
            method: 'POST',
            body: JSON.stringify(productOrder),
            headers: {'content-type': 'application/json'}
        })
            .then(response => response.json())
    }

// update an order by its ID
    export const updateProductOrder = (id, productOrder) => {
        return fetch(`${PRODUCT_ORDERS_URL}/update/${id}`, {
            method: 'PUT',
            body: JSON.stringify(productOrder),
            headers: {'content-type': 'application/json'}
        })
            .then(response => response.json())
    }


// export all functions as the API to this service
    export default {
        findAllProductOrders,
        findProductOrderById,
        // findOrdersByUser,
        deleteProductOrder,
        createProductOrder,
        updateProductOrder,
        // findAllProductsById
}
