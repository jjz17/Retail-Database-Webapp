package com.example.springtemplate.products;


import com.example.springtemplate.orders.Order;
import com.example.springtemplate.product_orders.ProductOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.springtemplate.orders.OrderRepository;


import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ProductDao {
    @Autowired
    ProductRepository productRepository;
    @Autowired
    OrderRepository orderRepository;

    @PostMapping("/orm/products/create")
    public Product createProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }

    @GetMapping("/orm/products/find")
    public List<Product> findAllProducts() {
        return (List<Product>) productRepository.findAll();
    }

    @GetMapping("/orm/products/find/{productId}")
    public Product findProductById(
            @PathVariable("productId") Integer productId) {
        return productRepository.findById(productId).get();
    }


    @DeleteMapping("/orm/products/delete/{productId}")
    public void deleteProduct(
            @PathVariable("productId") Integer id) {
        productRepository.deleteById(id);
    }

    @PutMapping("/orm/products/{productId}")
    public Product updateProduct(
            @PathVariable("productId") Integer id,
            @RequestBody Product productUpdates) {
        Product product = productRepository.findById(id).get();
        product.setName(productUpdates.getName());
        product.setPrice(productUpdates.getPrice());
        product.setQuantity(productUpdates.getQuantity());
        return productRepository.save(product);
    }

    @GetMapping("/orm/products/find/orders/{productId}")
    public List<Order> findOrdersById(
            @PathVariable("productId") Integer productId) {
        List<ProductOrder> productOrders = productRepository.findById(productId).get().getProductOrders();
        List<Order> orders = new ArrayList<>();
        for (ProductOrder po : productOrders) {
            orders.add(orderRepository.findById(po.getOrderId()).get());
        }
        return orders;
    }

    @GetMapping("/orm/products/find/product_orders/{productId}")
    public List<ProductOrder> findProductOrdersById(
            @PathVariable("productId") Integer productId) {
        return productRepository.findById(productId).get().getProductOrders();
    }
}
