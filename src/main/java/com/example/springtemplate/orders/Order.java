package com.example.springtemplate.orders;

import com.example.springtemplate.product_orders.ProductOrder;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "orders")
public class Order {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private Integer userId;


  @OneToMany(mappedBy = "orderId")
  @JsonIgnore
  private List<ProductOrder> productOrders;

  public List<ProductOrder> getProductOrders() { return productOrders; }
  public void setProductOrders(List<ProductOrder> productOrders) { this.productOrders = productOrders; }


  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public Integer getUserId() {
    return userId;
  }

  public void setUserId(Integer customerId) {
    this.userId = customerId;
  }

  public Order(Integer customerId) {
    this.userId = customerId;
  }

  public Order() {}
}
