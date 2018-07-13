package io.javabrains.springbootstarter.bao;

import io.javabrains.springbootstarter.dao.TimesheetRepository;
import io.javabrains.springbootstarter.dao.UserRepository;
import io.javabrains.springbootstarter.model.Timesheet;
import io.javabrains.springbootstarter.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TimesheetService {

    @Autowired
    private  UserRepository userRepository;

    @Autowired
    private TimesheetRepository timesheetRepository;


    public List<User> getUsersData(){
       return userRepository.getUsers();
    }

    public void setUserData(User user){
        userRepository.setUser(user);
    }


    public void addTimesheet(Timesheet timesheet){
        timesheetRepository.addNewTimesheet(timesheet);
    }

    public List<Timesheet> getTimesheets(){
        return timesheetRepository.getAllTimesheets();
    }
}
// alt + ctrl+ O to clear not used dependencies.