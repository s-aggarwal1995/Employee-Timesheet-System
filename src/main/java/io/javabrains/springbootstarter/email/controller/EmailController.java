package io.javabrains.springbootstarter.email.controller;


import freemarker.template.Configuration;
import freemarker.template.Template;
import io.javabrains.springbootstarter.bao.TimesheetServiceIfc;
import io.javabrains.springbootstarter.email.model.EmailMessage;
import io.javabrains.springbootstarter.email.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class EmailController {

    @Autowired
    EmailService emailService;

    @Autowired
    TimesheetServiceIfc timesheetService;

    @Autowired
    private Configuration freemarkerConfig;

    @Autowired
    MailSender sender;

    @RequestMapping(value="/email",method=RequestMethod.POST)
    public String sendEmail(@RequestBody EmailMessage emailMessage)
    {
        try {
        String username=emailMessage.getUsername();
        String password=emailMessage.getPassword();
        String to=emailMessage.getReceiver();
        String subject=emailMessage.getSubject();
        String text=getMailTemplate();
        List<String> cc = emailMessage.getStakeholders();


        emailService.sendSimpleMessage(username,password,to,subject,text,cc);
            return "{\"response\":\"Mail Sent\"}";
        }
        catch(Exception ex) {
            return "{\"response\":\"Error in sending email: Either Username or Password is Incorrect\"}";
        }
    }


    @RequestMapping(value="/getemailtemplate",method=RequestMethod.GET)
    public String getMailTemplate()
    {
        try {
           return  emailService.getMailTemplate();
        }
        catch(Exception ex) {
            return "Error In Getting Template:" + ex;
        }
    }

}
