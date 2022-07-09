package com.example.fsptwillio.controller;

import com.example.fsptwillio.payload.Payload;
import com.example.fsptwillio.service.PayloadService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.*;

import java.util.Deque;
import java.util.HashMap;

import static org.springframework.http.MediaType.APPLICATION_FORM_URLENCODED_VALUE;

@RestController
@RequestMapping("/payload")
@CrossOrigin("*")
public class PayloadController {


  private final PayloadService service;
    @Autowired
    public PayloadController(PayloadService service) {
        this.service = service;
    }

    @GetMapping
    public Deque<Payload> getPayload(){
                return Payload.queue;
    }

    @PostMapping(value = "/sms", consumes = APPLICATION_FORM_URLENCODED_VALUE)
    public void accept(@RequestParam HashMap<String, String> paramMap) {
       service.handlePayload(paramMap);

    }

    @GetMapping("/user")
    public ResponseEntity<?> getUser(@AuthenticationPrincipal OAuth2User user) {
        if (user == null) {
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            return ResponseEntity.ok().body(user.getAttributes());
        }
    }

}
