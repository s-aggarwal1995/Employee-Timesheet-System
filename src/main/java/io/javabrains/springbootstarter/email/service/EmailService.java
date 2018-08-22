package io.javabrains.springbootstarter.email.service;

import java.util.List;

public interface EmailService  {

    public void sendSimpleMessage(String username, String password, String to, String subject, String text,List<String> cc)throws Exception;
    public String getMailTemplate() throws Exception;
}
