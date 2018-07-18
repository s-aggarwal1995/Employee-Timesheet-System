package io.javabrains.springbootstarter.bao;

import io.javabrains.springbootstarter.dao.TimesheetRepository;
import io.javabrains.springbootstarter.model.Task;
import io.javabrains.springbootstarter.model.TaskData;
import io.javabrains.springbootstarter.model.Timesheet;
import io.javabrains.springbootstarter.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TimesheetService  implements  TimesheetServiceIfc{


    @Autowired
    private TimesheetRepository timesheetRepository;


    public List<User> getUsersData(){
        return timesheetRepository.getUsers();
    }

    public void setUserData(User user){
        timesheetRepository.setUser(user);
    }


    public void addTimesheet(Timesheet timesheet){
        timesheetRepository.addNewTimesheet(timesheet);
    }

    public List<Timesheet> getTimesheets(){
        return timesheetRepository.getAllTimesheets();
    }

    @Override
    public List<TaskData> getTasksData() {
        return  timesheetRepository.getTasksData();
    }
}
