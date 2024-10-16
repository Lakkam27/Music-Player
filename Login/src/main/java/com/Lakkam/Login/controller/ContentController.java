package com.Lakkam.Login.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ContentController {
    @GetMapping("/login")
    public String login() {
        return "loginPage"; // Make sure "loginPage.html" exists
    }

    @GetMapping("/signup")
    public String signup() {
        return "signupPage"; // Make sure "signupPage.html" exists
    }


}
