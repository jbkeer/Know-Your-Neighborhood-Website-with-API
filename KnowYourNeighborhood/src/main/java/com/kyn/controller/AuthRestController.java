package com.kyn.controller;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kyn.entity.User;
import com.kyn.service.UserService;

@RestController
public class AuthRestController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    @CrossOrigin(origins = "http://localhost:3000")
    public String registerNewUser(@RequestBody User user) {
        userService.saveUser(user);
        System.out.println(user);
        System.out.println("User successfully registered.");
        return "User successfully registered.";
    }

    @GetMapping("/user")
    @CrossOrigin(origins = "http://localhost:3000")
    public Principal getUser(final Principal user) {
        return user;
    }

    @GetMapping("/all_users")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<User> showAllUser() {
        List<User> users = userService.showAllUser();
        System.out.print(users);
        return users;
    }
    
    @PostMapping("/sign_in")
    @CrossOrigin(origins = "http://localhost:3000")
    public String onLogin(@RequestBody User user) {
        User logUser = userService.login(user.getEmail(), user.getPassword());
        if (userService.userExists(user.getEmail(), user.getPassword())) { 
        	System.out.println(logUser);
            return "You have successfully logged in";
        } else {
            return "Login failed";
        }
    }

    @GetMapping("/logout")
    @CrossOrigin(origins = "http://localhost:3000")
    public String onLogoutSuccess() {
        return "You have successfully logged out";
    }
}













