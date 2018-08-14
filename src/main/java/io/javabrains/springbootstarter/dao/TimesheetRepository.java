package io.javabrains.springbootstarter.dao;

import io.javabrains.springbootstarter.model.TaskData;
import io.javabrains.springbootstarter.model.Timesheet;
import io.javabrains.springbootstarter.model.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TimesheetRepository {

    @Autowired
    private MongoTemplate mongoTemplate;

    private static final Logger logger = LoggerFactory.getLogger(TimesheetRepository.class);


    public String addNewTimesheet(Timesheet timesheet) {

        try {
            logger.info("Enter Into The Add New Timesheet Function At Repositorty");

            Query query = new Query();
//        //query.addCriteria(Criteria.where("startDate").is(timesheet.getStartDate()).andOperator(Criteria.where("userId").is(timesheet.getUser().getUserId())) );
            query.addCriteria(Criteria.where("startDate").is(timesheet.getStartDate()));

            List<Timesheet> userTimesheets = mongoTemplate.find(query, Timesheet.class);


            int count = 0;
            for (Timesheet userTimesheet : userTimesheets) {
                if (userTimesheet.getUser().getUserId().equals(timesheet.getUser().getUserId())) {
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


            if (count <= 0) {
                mongoTemplate.save(timesheet);
                return "{\"response\":\"Timesheet is Successfully Submitted\"}";

            } else {
                mongoTemplate.updateFirst(query, update, Timesheet.class);
                return "{\"response\":\"Timesheet is Successfully Updated\"}";
            }

        }
        catch (Exception e){
            e.printStackTrace();
            logger.info("Exception Occur At Add New Timesheet Function At Repositorty");
            return null;
        }


    }

    public List<Timesheet> getAllTimesheets() {
        try {
            logger.info("Enter Into The Get All Timesheets Function At Repositorty");
            return mongoTemplate.findAll(Timesheet.class);
        }
        catch (Exception e){
            e.printStackTrace();
            logger.info("Exception Occur At Get All Timesheets At Repositorty");
            return null;
        }

    }

    public List<User> getUsers() {


        try {
            logger.info("Enter Into The Get Users Function At Repositorty");
            return mongoTemplate.findAll(User.class);
        }
        catch (Exception e){
            e.printStackTrace();
            logger.info("Exception Occur Into The Get Users Function At Repositorty");
            return null;
        }
    }

    public void setUser(User user) {

        try {
            logger.info("Enter Into Set Users Function At Repositorty");
            mongoTemplate.save(user);
            logger.info("User Is Saved Into The User Repository");
        }
        catch (Exception e){
            e.printStackTrace();
            logger.info("Exception Occur Into The Set Users Function At Repositorty");

        }
    }

    public List<TaskData> getTasksData() {
        try {
            logger.info("Enter Into Get Task Data Function At Repositorty");
            return mongoTemplate.findAll(TaskData.class);
        }
        catch (Exception e){
            e.printStackTrace();
            logger.info("Exception Occur At Get Task Data Function In Repositorty");
            return null;
        }
    }

    public List<Timesheet> getTimesheetsAccordingToWeekAndUser(String startDate) {


        try {
            logger.info("Enter Into The Get Timesheets According To Week And User Function At Repositorty");
            Query query = new Query();
            query.addCriteria(Criteria.where("startDate").is(startDate));

            List<Timesheet> userTimesheets = mongoTemplate.find(query, Timesheet.class);

            return userTimesheets;
        }
        catch (Exception e){
            e.printStackTrace();
            logger.info("ExceptionInto The Get Timesheets According To Week And User Function In Repositorty");
            return null;
        }

    }
}








