package io.javabrains.springbootstarter.admin.user_credentials.controller;

import io.javabrains.springbootstarter.admin.user_credentials.model.AdminModel;
import io.javabrains.springbootstarter.otp.controller.OtpSystemRestController;
import io.javabrains.springbootstarter.otp.model.OtpSystem;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.mail.internet.MimeMessage;

public class AdminController {

    private static final Logger logger = LoggerFactory.getLogger(AdminController.class);

    @RequestMapping(value = "/validateadmin", method = RequestMethod.POST)
    public ResponseEntity<Object> validateAdmin(@RequestBody AdminModel adminCredentials) {
        try {

            logger.info("enter into the validate admin function");




            return new ResponseEntity<>("{\"response\":\"Otp Is Send Successfully\"}", HttpStatus.OK);


        } catch (Exception e) {
            logger.info("Error Occur At Validate Admin Function");
            return null;
        }
    }


}
