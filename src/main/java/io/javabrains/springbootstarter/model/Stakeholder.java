package io.javabrains.springbootstarter.model;


import org.springframework.stereotype.Component;


public class Stakeholder {

    private String stakeholderEmail;

    public String getStakeholderEmail() {
        return stakeholderEmail;
    }

    public void setStakeholderEmail(String stakeholderEmail) {
        this.stakeholderEmail = stakeholderEmail;
    }

    public Stakeholder(){
    }
}
