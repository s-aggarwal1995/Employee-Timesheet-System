package io.javabrains.springbootstarter.dao;

import io.javabrains.springbootstarter.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserRepository {

    @Autowired
    private MongoTemplate mongoTemplate;

    public List<User> getUsers(){
        return mongoTemplate.findAll(User.class);
    }

    public void setUser(User user) {
         mongoTemplate.save(user);
    }


}

