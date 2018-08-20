package io.javabrains.springbootstarter.email.service;

import freemarker.template.Configuration;
import freemarker.template.Template;
import io.javabrains.springbootstarter.bao.TimesheetServiceIfc;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.ui.freemarker.FreeMarkerTemplateUtils;

import javax.mail.internet.MimeMessage;
import java.io.File;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.text.StringEscapeUtils;


@Service
public class EmailServiceImpl implements  EmailService {

    @Autowired
    JavaMailSender sender;

    @Autowired
    private Configuration freemarkerConfig;

    @Autowired
    TimesheetServiceIfc timesheetService;


    public void sendSimpleMessage(String to, String subject, String text, List<String> cc) throws Exception
    {
//        List<String> ccEmailList = new ArrayList<String>();
//        ccEmailList.add("sanchitaggarwal751@gmail.com");
//        ccEmailList.add("sanccchit@gmail.com");


        String[]  emailsArray = cc.toArray(new String[cc.size()]);


        MimeMessage message = sender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message,true);
        helper.setTo(to);
        helper.setCc(emailsArray);
        helper.setSubject(subject);
        helper.setText(text,true);



        FileSystemResource file
                = new FileSystemResource(new File("poi-generated-file.xlsx"));
        helper.addAttachment("WeeklyTimesheet.xlsx", file);

//        ClassPathResource file = new ClassPathResource("poi-generated-file.xlsx");
//        helper.addAttachment("WeeklyTimesheet", file);

        sender.send(message);

    }

    public String getMailTemplate() throws Exception
    {
        String firstWord="";

        MimeMessage message = sender.createMimeMessage();

        MimeMessageHelper helper = new MimeMessageHelper(message,true);

        Map<String, Object> model = new HashMap();

        if(timesheetService.getExcelGeneratedUser().getUser().getUserName().contains(" ")){
            firstWord = timesheetService.getExcelGeneratedUser().getUser().getUserName().substring(0, timesheetService.getExcelGeneratedUser().getUser().getUserName().indexOf(" "));
        }



        model.put("clientName", timesheetService.getExcelGeneratedUser().getUser().getClientEmail());
        model.put("startDate",timesheetService.getExcelGeneratedUser().getStartDate());
        model.put("endDate",timesheetService.getExcelGeneratedUser().getEndDate());
        model.put("user",firstWord);

        // set loading location to src/main/resources
        // You may want to use a subfolder such as /templates here

        freemarkerConfig.setClassForTemplateLoading(this.getClass(), "/");

        Template t = freemarkerConfig.getTemplate("emailTemplate.ftl");
        String text = FreeMarkerTemplateUtils.processTemplateIntoString(t, model);

//        return "{\"response\":\"" + StringEscapeUtils.escapeHtml4(text) + "\"}";
//            return "{\"response\":\"" + text + "\"}";
        return text;

    }


}
