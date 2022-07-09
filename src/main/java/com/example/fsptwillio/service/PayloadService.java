package com.example.fsptwillio.service;

import com.example.fsptwillio.payload.Payload;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
public class PayloadService {

    public void handlePayload(HashMap<String,String> map){
        //validate request is actually from twilio is non-malicious
        if(map.get("AccountSid") == null || !map.get("AccountSid").equals("{YOUR_TWILIO_ACCOUNT_SID}")){
          return;
        }
         Payload response = new Payload(map.get("Body"));

    }
}
