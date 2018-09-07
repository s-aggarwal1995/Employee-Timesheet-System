package io.javabrains.springbootstarter.otp.controller;

import io.javabrains.springbootstarter.model.Timesheet;
import io.javabrains.springbootstarter.otp.model.OtpSystem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailSender;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.*;

import javax.mail.internet.MimeMessage;
import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class OtpSystemRestController {

    @Autowired
    JavaMailSender sender;

    @Autowired
    MailSender senderAuthentciation;

    @Value("${spring.mail.username}")
    String username;

    @Value("${spring.mail.password}")
    String password;



    private Map<String, OtpSystem> otp_data = new HashMap<>();



    @RequestMapping(value="/sentotp",method=RequestMethod.POST)
    public ResponseEntity<Object> sendOtp(@RequestBody String userEmail)
    {
        try {



            JavaMailSenderImpl jMailSender = (JavaMailSenderImpl) senderAuthentciation;

            jMailSender.setUsername(username);
            jMailSender.setPassword(password);

            OtpSystem otpSystem = new OtpSystem();
            otpSystem.setUserEmail(userEmail);
            otpSystem.setOtp(String.valueOf((int)(Math.random() * (10000 - 1000) + 1000)));
            otpSystem.setExpiryTime(System.currentTimeMillis() + 30000);

            otp_data.put(userEmail,otpSystem);

            MimeMessage message = sender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message,true);
            helper.setTo(userEmail);
            helper.setSubject("Timesheet Management System Login OTP");
            helper.setText(" your Verification Code is " + otpSystem.getOtp());

            sender.send(message);

            return new ResponseEntity<>("{\"response\":\"Otp Is Send Successfully\"}", HttpStatus.OK);



        }
        catch (Exception e){
            return null;
        }
    }

    @RequestMapping(value="/verifyotp",method=RequestMethod.POST)
    public ResponseEntity<Object> verifyOTP(@RequestBody OtpSystem requestBodyOTPSystem){

        if(requestBodyOTPSystem.getOtp()==null || requestBodyOTPSystem.getOtp().trim().length()<=0){
            return new ResponseEntity<>("{\"response\":\"please provide OTP\"}", HttpStatus.BAD_REQUEST);
        }


        if(otp_data.containsKey(requestBodyOTPSystem.getUserEmail())){
            OtpSystem otpSystem = otp_data.get(requestBodyOTPSystem.getUserEmail());
            if(otpSystem!=null){
                if(otpSystem.getExpiryTime() >= System.currentTimeMillis()){
                    if(requestBodyOTPSystem.getOtp().equals(otpSystem.getOtp())){
                        otp_data.remove(requestBodyOTPSystem.getUserEmail());
                        return new ResponseEntity<>("{\"response\":\"OTP is verified successfullly\"}",HttpStatus.OK);
                    }

                    return new ResponseEntity<>("{\"response\":\"Invalid OTP\"}",HttpStatus.BAD_REQUEST);
                }
                return new ResponseEntity<>("{\"response\":\"Otp Expired\"}" ,HttpStatus.BAD_REQUEST);
            }
            return new ResponseEntity<>( "{\"response\":\"something went wrong\"}",HttpStatus.BAD_REQUEST);
        }
     return new ResponseEntity<>( "{\"response\":\"email id not found\"}",HttpStatus.NOT_FOUND);
    }

}
