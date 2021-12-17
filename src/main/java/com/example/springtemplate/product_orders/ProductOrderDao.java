package com.example.springtemplate.product_orders;

import com.example.springtemplate.orders.Order;
import com.example.springtemplate.orders.OrderRepository;
import com.example.springtemplate.products.Product;
import com.example.springtemplate.products.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ProductOrderDao {
  @Autowired
  OrderRepository orderRepository;
  @Autowired
  ProductRepository productRepository;
  @Autowired
  ProductOrderRepository productOrderRepository;

  @PostMapping("/orm/product_orders/create")
  public ProductOrder createProductOrder(
          @RequestBody ProductOrder productOrder) {

    // Adding newly created product order to order's list
    Order order = orderRepository.findById(productOrder.getOrderId()).get();
    List<ProductOrder> productOrders = order.getProductOrders();
    productOrders.add(productOrder);
    order.setProductOrders(productOrders);
    orderRepository.save(order);

    // Adding newly created product order to product's list
    Product product = productRepository.findById(productOrder.getProductId()).get();
    productOrders = product.getProductOrders();
    productOrders.add(productOrder);
    product.setProductOrders(productOrders);
    productRepository.save(product);

    return productOrderRepository.save(productOrder);
  }

  @GetMapping("/orm/product_orders/find")
  public List<ProductOrder> findAllProductOrders() {
    return (List<ProductOrder>) productOrderRepository.findAll();
  }

  @GetMapping("/orm/product_orders/find/id/{id}")
  public ProductOrder findProductOrderById(
          @PathVariable("id") Integer id) {
    return productOrderRepository.findById(id).get();
  }

  @GetMapping("/orm/orders/{orderId}/product_orders")
  public List<ProductOrder> findProductOrdersByOrder(
          @PathVariable("orderId") Integer orderId) {
    return orderRepository.findById(orderId).get().getProductOrders();
  }

  @GetMapping("/orm/products/{productId}/product_orders")
  public List<ProductOrder> findProductOrdersByProduct(
          @PathVariable("productId") Integer productId) {
    return productRepository.findById(productId).get().getProductOrders();
  }

  @DeleteMapping("/orm/product_orders/delete/{product_orderId}")
  public void deleteProductOrder(
          @PathVariable("product_orderId") Integer id) {
    productOrderRepository.deleteById(id);
  }

  @PutMapping("/orm/product_orders/update/{product_orderId}")
  public ProductOrder updateProductOrder(
          @PathVariable("product_orderId") Integer id,
          @RequestBody ProductOrder productOrderUpdates) {
    ProductOrder productOrder = productOrderRepository.findById(id).get();
    productOrder.setQuantity(productOrderUpdates.getQuantity());
    productOrder.setOrderId(productOrderUpdates.getOrderId());
    productOrder.setProductId(productOrderUpdates.getProductId());
    return productOrderRepository.save(productOrder);
  }
}
