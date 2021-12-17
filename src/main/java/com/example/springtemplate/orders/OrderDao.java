package com.example.springtemplate.orders;

import com.example.springtemplate.product_orders.ProductOrder;
import com.example.springtemplate.products.Product;
import com.example.springtemplate.products.ProductRepository;
import com.example.springtemplate.users.User;
import com.example.springtemplate.users.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class OrderDao {
    @Autowired
    UserRepository userRepository;
    @Autowired
    OrderRepository orderRepository;
    @Autowired
    ProductRepository productRepository;

    @PostMapping("/orm/orders/create")
    public Order createOrder(@RequestBody Order order) {
        // userRepository.findById(order.getCustomerId()).get().getOrders().add(order);
        return orderRepository.save(order);
    }


    @GetMapping("/orm/orders/find")
    public List<Order> findAllOrders() {
        return (List<Order>) orderRepository.findAll();
    }

    @GetMapping("orm/orders/find/{orderId}")
    public Order findOrderById(
            @PathVariable("orderId") Integer orderId) {
        return orderRepository.findById(orderId).get();
    }


    @DeleteMapping("/orm/orders/delete/{orderId}")
    public void deleteOrder(
            @PathVariable("orderId") Integer id) {
        orderRepository.deleteById(id);
    }

    @PutMapping("/orm/orders/{orderId}")
    public Order updateOrder(
            @PathVariable("orderId") Integer id,
            @RequestBody Order orderUpdates) {
        Order order = orderRepository.findById(id).get();
        order.setUserId(orderUpdates.getUserId());
        return orderRepository.save(order);
    }

    @GetMapping("/orm/orders/find/products/{orderId}")
    public List<Product> findProductsById(
            @PathVariable("orderId") Integer orderId) {
        List<ProductOrder> productOrders = orderRepository.findById(orderId).get().getProductOrders();
        List<Product> products = new ArrayList<>();
        for (ProductOrder po : productOrders) {
            products.add(productRepository.findById(po.getProductId()).get());
        }
        // System.out.println(products);
        return products;
    }

    @GetMapping("/orm/orders/find/product_orders/{orderId}")
    public List<ProductOrder> findProductOrdersById(
            @PathVariable("orderId") Integer orderId) {
        return orderRepository.findById(orderId).get().getProductOrders();
    }
}