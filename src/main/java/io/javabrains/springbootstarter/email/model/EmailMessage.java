package io.javabrains.springbootstarter.email.model;

import com.fasterxml.jackson.annotation.JsonAutoDetect;

import java.util.ArrayList;
import java.util.List;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
public class EmailMessage
{

    String username;
    String Password;
    String receiver;
    List<String> stakeholders = new ArrayList<String>();
    String subject;
    String mailBody;



    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }



    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }


    public List<String> getStakeholders() {
        return stakeholders;
    }

    public void setStakeholders(List<String> stakeholders) {
        this.stakeholders = stakeholders;
    }


    public String getMailBody() {
        return mailBody;
    }

    public void setMailBody(String mailBody) {
        this.mailBody = mailBody;
    }


    public String getReceiver() {
        return receiver;
    }

    public void setReceiver(String receiver) {
        this.receiver = receiver;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }


}
