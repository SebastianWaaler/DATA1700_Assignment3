package com.example.assignment3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@SpringBootApplication
@RestController
public class CustomerController {

    @Autowired
    private CustomerRepository rep;

    @PostMapping("/tickets")
    public void saveTicket(Customer CustomerIn) {
        rep.saveTicket(CustomerIn);
    }

    @GetMapping("/getAll")
    public List<Customer> getAllCustomers() {
        return rep.getAllCustomers();
    }

    @GetMapping("/delete")
    public void deleteAllCustomers() {
        rep.deleteAllCustomers();
    }
}
