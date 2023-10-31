package com.MHunter.mhunter.controller;


import com.MHunter.mhunter.model.StripeRequest;
import org.springframework.stereotype.Controller;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
@Controller
public class StripeApp {
    @Value("${stripe.api.publicKey}")
    private String publicKey;
    @GetMapping("/")
    public String home(Model model){
        model.addAttribute("request", new StripeRequest());
        return "index";
    }

    @PostMapping("/")
    public String showCard(@ModelAttribute StripeRequest request,
                           BindingResult bindingResult,
                           Model model){
        if (bindingResult.hasErrors()){
            return "index";
        }
        model.addAttribute("publicKey", publicKey);
        model.addAttribute("amount", request.getAmount());
        model.addAttribute("email", request.getEmail());
        model.addAttribute("productName", request.getProductName());
        return "checkout";
    }
}
