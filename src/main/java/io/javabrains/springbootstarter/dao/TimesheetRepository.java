package io.javabrains.springbootstarter.dao;

import io.javabrains.springbootstarter.model.Task;
import io.javabrains.springbootstarter.model.TaskData;
import io.javabrains.springbootstarter.model.Timesheet;
import io.javabrains.springbootstarter.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TimesheetRepository {

    @Autowired
    private MongoTemplate mongoTemplate;


    public void addNewTimesheet(Timesheet timesheet)
    {
        mongoTemplate.save(timesheet);
    }

    public List<Timesheet> getAllTimesheets()
    {
        return mongoTemplate.findAll(Timesheet.class);
    }

    public List<User> getUsers()
    {
        return mongoTemplate.findAll(User.class);
    }

    public void setUser(User user)
    {
        mongoTemplate.save(user);
    }

    public List<TaskData> getTasksData()
    {
        return mongoTemplate.findAll(TaskData.class);
    }



}
