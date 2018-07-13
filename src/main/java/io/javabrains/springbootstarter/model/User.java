package io.javabrains.springbootstarter.model;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;


@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
@Document (collection = "Users")
public class User {

     @Id
     String userId;
     String userName;
     String managerEmail;
     String clientEmail;
    ArrayList<Stakeholder> stakeholdersEmail;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getManagerEmail() {
        return managerEmail;
    }

    public void setManagerEmail(String managerEmail) {
        this.managerEmail = managerEmail;
    }

    public String getClientEmail() {
        return clientEmail;
    }

    public void setClientEmail(String clientEmail) {
        this.clientEmail = clientEmail;
    }

    public ArrayList<Stakeholder> getStakeholdersEmail() {
        return stakeholdersEmail;
    }

    public void setStakeholdersEmail(ArrayList<Stakeholder> stakeholdersEmail) {
        this.stakeholdersEmail = stakeholdersEmail;
    }

     public User() {
     }

}
