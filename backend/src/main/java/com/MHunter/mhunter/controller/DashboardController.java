package com.MHunter.mhunter.controller;

import com.MHunter.mhunter.model.User;
import jakarta.servlet.http.HttpSession;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class DashboardController {
    @GetMapping("/admin/admindashboard")
    public ResponseEntity<String> getDashboardDetails(HttpSession session) {
        User loggedInUser = (User) session.getAttribute("loggedInUser");

        if (loggedInUser != null) {
            // Return relevant dashboard details for the user
            return ResponseEntity.ok("Welcome to the dashboard, " + loggedInUser.getFirstName() + "!");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Not logged in");
        }
    }
}
