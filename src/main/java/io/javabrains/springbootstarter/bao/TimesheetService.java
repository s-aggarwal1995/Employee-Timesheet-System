package io.javabrains.springbootstarter.bao;

import io.javabrains.springbootstarter.dao.TimesheetRepository;
import io.javabrains.springbootstarter.model.TaskData;
import io.javabrains.springbootstarter.model.Timesheet;
import io.javabrains.springbootstarter.model.User;
import io.javabrains.springbootstarter.util.ExcelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TimesheetService  implements  TimesheetServiceIfc{


    @Autowired
    private TimesheetRepository timesheetRepository;

    public static Timesheet excelGeneratedUser;



    public List<User> getUsersData(){
        return timesheetRepository.getUsers();
    }

    public void setUserData(User user){
        timesheetRepository.setUser(user);
    }


    public String addTimesheet(Timesheet timesheet){
       return timesheetRepository.addNewTimesheet(timesheet);

    }

    public void exportToExcel(Timesheet timesheet){
        ExcelService.createExcelSheet(timesheet);
        timesheetRepository.addNewTimesheet(timesheet);
        excelGeneratedUser = timesheet;
    }

    public List<Timesheet> getTimesheets(){
        return timesheetRepository.getAllTimesheets();
    }

    @Override
    public List<TaskData> getTasksData() {
        return  timesheetRepository.getTasksData();
    }



    public Timesheet getTimesheetsAccordingToWeek(String startDate, User user){

        List<Timesheet> userTimesheets = timesheetRepository.getTimesheetsAccordingToWeekAndUser(startDate);


        for (Timesheet userTimesheet : userTimesheets) {
            if (userTimesheet.getUser().getUserId().equals(user.getUserId())) {
                return userTimesheet;
            }
        }

        return null;
    }

}
