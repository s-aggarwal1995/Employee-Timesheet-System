package io.javabrains.springbootstarter.dao;

import io.javabrains.springbootstarter.model.Timesheet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TimesheetRepository {

    @Autowired
    private MongoTemplate mongoTemplate;


    public void addNewTimesheet(Timesheet timesheet) {
        mongoTemplate.save(timesheet);
    }

    public List<Timesheet> getAllTimesheets(){
        return mongoTemplate.findAll(Timesheet.class);
    }


}
