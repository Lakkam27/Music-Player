package com.Lakkam.Login.controller;

import com.Lakkam.Login.model.MyAppUSerRepository;
import com.Lakkam.Login.model.MyAppUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class RegistrationController {
    @Autowired
    private MyAppUSerRepository myAppUSerRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
//    @PostMapping(value = "/signup",consumes = "application/json")
//    public MyAppUser createUser(@RequestBody  MyAppUser myAppUser) {
//        myAppUser.setPassword(passwordEncoder.encode(myAppUser.getPassword()));
//        return myAppUSerRepository.save(myAppUser);
//    }
    @PostMapping(value = "/signup", consumes = "application/json")
    public MyAppUser createUser(@RequestBody MyAppUser myAppUser) {
        // Log received user data
        System.out.println("Received user: " + myAppUser);

        myAppUser.setPassword(passwordEncoder.encode(myAppUser.getPassword()));

        // Save the user to the database and log the result
        MyAppUser savedUser = myAppUSerRepository.save(myAppUser);
        System.out.println("Saved user: " + savedUser);

        return savedUser;
    }
    @PostMapping(value = "/login", consumes = "application/json")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        Optional<MyAppUser> userOptional = myAppUSerRepository.findByEmail(loginRequest.getEmail());
        if (userOptional.isPresent()) {
            MyAppUser user = userOptional.get();
            if (passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
                return ResponseEntity.ok().build(); // Successful login
            }
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build(); // Invalid email or password
    }
}
