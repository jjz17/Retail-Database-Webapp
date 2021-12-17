package com.example.springtemplate.users;

import com.example.springtemplate.orders.Order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class UserDao {
    @Autowired
    UserRepository userRepository;

    @PostMapping("/orm/users/create")
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @GetMapping("/orm/users/find")
    public List<User> findAllUsers() {
        return (List<User>) userRepository.findAll();
    }

    @GetMapping("/orm/users/find/{userId}")
    public User findUserById(
            @PathVariable("userId") Integer id) {
        return userRepository.findById(id).get();
    }

    @DeleteMapping("/orm/users/delete/{userId}")
    public void deleteUser(
            @PathVariable("userId") Integer id) {
        userRepository.deleteById(id);
    }

    @PutMapping("/orm/users/{userId}")
    public User updateUser(
            @PathVariable("userId") Integer id,
            @RequestBody User userUpdates) {
        User user = userRepository.findById(id).get();
        user.setFirstName(userUpdates.getFirstName());
        user.setLastName(userUpdates.getLastName());
        user.setUsername(userUpdates.getUsername());
        user.setPassword(userUpdates.getPassword());
        user.setRole(userUpdates.getRole());
        user.setEmail(userUpdates.getEmail());
        user.setDateOfBirth(userUpdates.getDateOfBirth());
        return userRepository.save(user);
    }


    @GetMapping("/orm/users/find/orders/{userId}")
    public List<Order> findOrdersById(
            @PathVariable("userId") Integer userId) {
        return userRepository.findById(userId).get().getOrders();
    }
}
