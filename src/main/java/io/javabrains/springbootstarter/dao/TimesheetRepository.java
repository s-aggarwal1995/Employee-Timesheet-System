package io.javabrains.springbootstarter.dao;

import io.javabrains.springbootstarter.model.Task;
import io.javabrains.springbootstarter.model.TaskData;
import io.javabrains.springbootstarter.model.Timesheet;
import io.javabrains.springbootstarter.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;
import org.springframework.data.mongodb.core.query.BasicQuery;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;


import java.util.List;

@Repository
public class TimesheetRepository {

    @Autowired
    private MongoTemplate mongoTemplate;


    public String addNewTimesheet(Timesheet timesheet)
    {

        //find whether the record id present
          //mongoTemplate.save(timesheet);

        Query query = new Query();
//        //query.addCriteria(Criteria.where("startDate").is(timesheet.getStartDate()).andOperator(Criteria.where("userId").is(timesheet.getUser().getUserId())) );
        query.addCriteria(Criteria.where("startDate").is(timesheet.getStartDate()));

        List<Timesheet> userTimesheets = mongoTemplate.find( query, Timesheet.class);


        int count=0;
        for (Timesheet userTimesheet : userTimesheets) {
           if(userTimesheet.getUser().getUserId().equals(timesheet.getUser().getUserId())){
               count++;
           }
        }

        Update update = new Update();
        update.set("startDate", timesheet.getStartDate());
        update.set("endDate", timesheet.getEndDate());
        update.set("dates", timesheet.getDates());
        update.set("totalHoursForEachDate", timesheet.getTotalHoursForEachDate());
        update.set("user", timesheet.getUser());
        update.set("tasks", timesheet.getTasks());
        update.set("totalWeeklyHours", timesheet.getTotalWeeklyHours());




        if (count <= 0)
        {
            mongoTemplate.save(timesheet);
            return "{\"response\":\"Timesheet is Successfully Submitted\"}";

        } else
        {
            mongoTemplate.updateFirst(query, update, Timesheet.class);
            return "{\"response\":\"Timesheet is Successfully Updated\"}";
        }
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
