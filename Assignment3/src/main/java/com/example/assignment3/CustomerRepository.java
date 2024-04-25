package com.example.assignment3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CustomerRepository {
    @Autowired
    private JdbcTemplate db;

    public void saveTicket(Customer CustomerIn){
        String sql = "INSERT INTO Customer (movie, number, firstName, lastName, phone, email) VALUES(?, ?, ?, ?, ?, ?)";
        db.update(sql, CustomerIn.getmovie(), CustomerIn.getnumber(), CustomerIn.getfirstName(),
                CustomerIn.getlastName(), CustomerIn.getphone(), CustomerIn.getemail());
    }

    public List<Customer> getAllCustomers(){
        String sql = "SELECT * from Customer ORDER BY lastName";
        List<Customer> allCustomers = db.query(sql, new BeanPropertyRowMapper<>(Customer.class));
        return allCustomers;
    }

    public void deleteAllCustomers() {
        String sql = "DELETE FROM Customer";
        db.update(sql);
    }
}
