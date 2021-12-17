package com.example.springtemplate.product_orders;


import javax.persistence.*;

@Entity
@Table(name = "product_orders")
public class ProductOrder {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private Integer quantity;
  private Integer orderId;
  private Integer productId;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public Integer getQuantity() {
    return quantity;
  }

  public void setQuantity(Integer quantity) {
    this.quantity = quantity;
  }

  public Integer getProductId() { return productId; }

  public void setProductId(Integer productId) { this.productId = productId; }

  public Integer getOrderId() { return orderId; }

  public void setOrderId(Integer orderId) { this.orderId = orderId; }

  public ProductOrder(Integer quantity, Integer orderId, Integer productId) {
    this.quantity = quantity;
    this.orderId = orderId;
    this.productId = productId;
  }

  public ProductOrder() {}
}
