package io.javabrains.springbootstarter.email.controller;


import freemarker.template.Configuration;
import freemarker.template.Template;
import io.javabrains.springbootstarter.bao.TimesheetServiceIfc;
import io.javabrains.springbootstarter.email.model.EmailMessage;
import io.javabrains.springbootstarter.email.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;
import org.springframework.web.bind.annotation.*;

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

    @RequestMapping(value="/email",method=RequestMethod.POST)
    public String sendEmail(@RequestBody EmailMessage emailMessage)
    {

        String to=emailMessage.getReceiver();
        String subject=emailMessage.getSubject();
        String text=getMailTemplate();
        List<String> cc = emailMessage.getStakeholders();

        try {
            emailService.sendSimpleMessage(to,subject,text,cc);
            return "{\"response\":\"Email Sent!\"}";
        }
        catch(Exception ex) {
            return "Error in sending email: "+ex;
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
