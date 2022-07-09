package com.example.fsptwillio.model;


import lombok.AllArgsConstructor;
import lombok.Data;

import java.text.SimpleDateFormat;
import java.util.*;

@AllArgsConstructor
@Data
public class Payload {

    private String body;
    private String time;
    private String date;
    private String sender;

    public static List<Payload> list = new ArrayList<>();
    public  static Deque<Payload> queue = new LinkedList<>();


    public Payload(String body){
        Date dNow = new Date( );
        SimpleDateFormat ft =
                new SimpleDateFormat("hh:mm:ss a ");
        Date bNow = new Date( );
        SimpleDateFormat gt =
                new SimpleDateFormat("MM/dd");

        this.body = body;
        this.time = ft.format(dNow);
        this.date = gt.format(bNow);

        this.sender = inferSender(this.body);
        if(queue.size() == 15){
            queue.removeLast();
        }
        queue.addFirst(this);
    }
public String inferSender(String body){
        List<String> possibleSenders = List.of(
                "Apple", "Network Solutions", "QuickBooks",
                "Cisco Meraki", "ADP", "LastPass",
                "Microsoft", "Google", "Amazon" ,
                "LogicMonitor", "Verizon", "AT&T");
        for(String e : possibleSenders){
            if(body.contains(e)){
                return e;
            }
        }

        return "Cant infer sender";
}

}
