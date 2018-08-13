package io.javabrains.springbootstarter.email.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.javamail.MimeMessageHelper;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import javax.mail.internet.MimeMessage;
import java.io.File;
import java.util.ArrayList;
import java.util.List;

@Service
public class EmailServiceImpl implements  EmailService {

    @Autowired
    JavaMailSender sender;

    public void sendSimpleMessage(String to, String subject, String text) throws Exception
    {
        List<String> ccEmailList = new ArrayList<String>();
        ccEmailList.add("sanchitaggarwal751@gmail.com");
        ccEmailList.add("sanccchit@gmail.com");


        String[]  emailsArray = ccEmailList.toArray(new String[ccEmailList.size()]);


        MimeMessage message = sender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message,true);
        helper.setTo(to);
        helper.setText(text);
        helper.setSubject(subject);
        helper.setCc(emailsArray);

        FileSystemResource file
                = new FileSystemResource(new File("poi-generated-file.xlsx"));
        helper.addAttachment("WeeklyTimesheet.xlsx", file);

//        ClassPathResource file = new ClassPathResource("poi-generated-file.xlsx");
//        helper.addAttachment("WeeklyTimesheet", file);

        sender.send(message);

    }


}
