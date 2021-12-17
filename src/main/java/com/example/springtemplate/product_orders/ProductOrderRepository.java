package com.example.springtemplate.product_orders;

import org.springframework.data.repository.CrudRepository;

public interface ProductOrderRepository
        extends CrudRepository<ProductOrder, Integer> {
}
