package com.example.springtemplate.products;

import com.example.springtemplate.product_orders.ProductOrder;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "products")
public class Product {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String name;
  private Double price;
  private Integer quantity;

  @OneToMany(mappedBy = "productId")
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

  public String getName() { return name; }

  public void setName(String name) { this.name = name; }

  public Double getPrice() { return price; }

  public void setPrice(Double price) { this.price = price; }

  public Integer getQuantity() {
    return quantity;
  }

  public void setQuantity(Integer quantity) {
    this.quantity = quantity;
  }

  public Product(String name, Double price, Integer quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  public Product() {}
}
