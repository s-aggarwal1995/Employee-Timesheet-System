package io.javabrains.springbootstarter.bao;

import io.javabrains.springbootstarter.dao.TimesheetRepository;
import io.javabrains.springbootstarter.model.TaskData;
import io.javabrains.springbootstarter.model.Timesheet;
import io.javabrains.springbootstarter.model.User;
import io.javabrains.springbootstarter.util.ExcelService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TimesheetService  implements  TimesheetServiceIfc{


    @Autowired
    private TimesheetRepository timesheetRepository;

    private static final Logger logger = LoggerFactory.getLogger(TimesheetService.class);

    private Timesheet excelGeneratedUser;

    public Timesheet getExcelGeneratedUser() {
        return excelGeneratedUser;
    }

    public void setExcelGeneratedUser(Timesheet excelGeneratedUser) {
        this.excelGeneratedUser = excelGeneratedUser;
    }





    public List<User> getUsersData(){

        try {
            logger.info("Enter Into The Get User Data In Service Layer");
            return timesheetRepository.getUsers();
        }
        catch (Exception e){
            e.printStackTrace();
            logger.info("Exception Occurs At Service:getUserData Function");
            return null;
        }
    }

    public void setUserData(User user){

        try {
            logger.info("Enter Into The Set User Data In Service Layer");
            timesheetRepository.setUser(user);
        }
        catch (Exception e){
            e.printStackTrace();
            logger.info("Exception Occurs At Service:getUserData Function");
        }

    }


    public String addTimesheet(Timesheet timesheet){


        try {
            logger.info("Enter Into The Add Timesheet In Service Layer");
            return timesheetRepository.addNewTimesheet(timesheet);
        }
        catch (Exception e){
            e.printStackTrace();
            logger.info("Exception Occurs At Service:addTimesheet Function");
            return null;
        }

    }

    public void exportToExcel(Timesheet timesheet){

        try {
            logger.info("Enter Into The Export To excel In Service Layer");
            ExcelService.createExcelSheet(timesheet);
            timesheetRepository.addNewTimesheet(timesheet);
            setExcelGeneratedUser(timesheet);
        }
        catch (Exception e){
            e.printStackTrace();
            logger.info("Exception Occurs At Service:Export To Excel Function");
        }
    }

    public List<Timesheet> getTimesheets(){


        try {
            logger.info("Enter Into The Get Timesheet In Service Layer");
            return timesheetRepository.getAllTimesheets();
        }
        catch (Exception e){
            e.printStackTrace();
            logger.info("Exception Occurs At Service: Get Timesheet Function");
            return null;
        }


    }

    @Override
    public List<TaskData> getTasksData() {

        try {
            logger.info("Enter Into The Get Task In Service Layer");
            return timesheetRepository.getTasksData();
        }
        catch (Exception e){
            e.printStackTrace();
            logger.info("Exception Occurs At Service: Get Task Data Function");
            return null;
        }
    }



    public Timesheet getTimesheetsAccordingToWeek(String startDate, User user){

        try {
            logger.info("Enter Into The Get Timesheet According To Week In Service Layer");
            List<Timesheet> userTimesheets = timesheetRepository.getTimesheetsAccordingToWeekAndUser(startDate);


            for (Timesheet userTimesheet : userTimesheets) {
                if (userTimesheet.getUser().getUserId().equals(user.getUserId())) {
                    return userTimesheet;
                }
            }

            return null;
        }
        catch (Exception e){
            e.printStackTrace();
            logger.info("Exception Occurs At Service: Get Timesheet According To Week Function");
            return null;
        }
    }

}
