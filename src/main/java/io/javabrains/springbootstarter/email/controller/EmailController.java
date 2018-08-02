package io.javabrains.springbootstarter.email.controller;


import io.javabrains.springbootstarter.email.model.EmailMessage;
import io.javabrains.springbootstarter.email.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class EmailController {

    @Autowired
    EmailService emailService;

    @RequestMapping(value="/email",method=RequestMethod.POST)
    public String sendEmail(@RequestBody EmailMessage emailMessage)
    {
        String to=emailMessage.getReceiver();
        String subject=emailMessage.getSubject();
        String text=emailMessage.getMailBody();
        emailService.sendSimpleMessage(to,subject,text);
        return "email sent successfully";
    }

}
