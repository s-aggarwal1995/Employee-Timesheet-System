package io.javabrains.springbootstarter.email.service;

import freemarker.template.Configuration;
import freemarker.template.Template;
import io.javabrains.springbootstarter.bao.TimesheetService;
import io.javabrains.springbootstarter.bao.TimesheetServiceIfc;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.MailSender;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;

import javax.mail.internet.MimeMessage;
import java.io.File;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Service
public class EmailServiceImpl implements  EmailService {

    @Autowired
    JavaMailSender sender;

    @Autowired
    MailSender senderAuthentciation;

    @Autowired
    private Configuration freemarkerConfig;

    @Autowired
    TimesheetServiceIfc timesheetService;

    private static final Logger logger = LoggerFactory.getLogger(EmailServiceImpl.class);


    public void sendSimpleMessage(String username, String password, String to, String subject, String text, List<String> cc) throws Exception
    {

        try {
               logger.info("Enter The  sendSimpleMessage Function In Service Layer");
        String[]  emailsArray = cc.toArray(new String[cc.size()]);

        JavaMailSenderImpl jMailSender = (JavaMailSenderImpl) senderAuthentciation;

        jMailSender.setUsername(username);
        jMailSender.setPassword(password);

        MimeMessage message = sender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message,true);
        helper.setTo(to);
        helper.setCc(emailsArray);
        helper.setSubject(subject);
        helper.setText(text,true);

        FileSystemResource file  = new FileSystemResource(new File("poi-generated-file.xlsx"));
        helper.addAttachment("WeeklyTimesheet.xlsx", file);

        sender.send(message);

        logger.info("Exit The  sendSimpleMessage Function In Service Layer");

        }
        catch (Exception e){
            logger.error("Exception Occurs At sendSimpleMessage Function In Service Layer"+e.getMessage());
            throw (e);

        }



    }

    public String getMailTemplate() throws Exception
    {
        try {
            logger.info("Enter Into The getMailTemplate Function In Service Layer");
            String firstWordofClientName = timesheetService.getExcelGeneratedUser().getUser().getClientEmail();

            MimeMessage message = sender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);


            if (timesheetService.getExcelGeneratedUser().getUser().getClientEmail().contains(" ")) {
                firstWordofClientName = timesheetService.getExcelGeneratedUser().getUser().getClientEmail().substring(0, timesheetService.getExcelGeneratedUser().getUser().getClientEmail().indexOf(" "));
            }


            Map<String, Object> model = new HashMap();
            model.put("clientName", firstWordofClientName);
            model.put("startDate", timesheetService.getExcelGeneratedUser().getStartDate());
            model.put("endDate", timesheetService.getExcelGeneratedUser().getEndDate());
            model.put("user", timesheetService.getExcelGeneratedUser().getUser().getUserName());


            freemarkerConfig.setClassForTemplateLoading(this.getClass(), "/");

            Template t = freemarkerConfig.getTemplate("emailTemplate.ftl");
            String text = FreeMarkerTemplateUtils.processTemplateIntoString(t, model);
            logger.info("Exit From The getMailTemplate Function In Service Layer");
            return text;
        }
        catch(Exception ex){
            logger.error("Exception Occurs At getMailTemplate Function In Service Layer"+ex.getMessage());
            throw(ex);
        }

    }


}
