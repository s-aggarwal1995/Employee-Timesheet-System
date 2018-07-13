package io.javabrains.springbootstarter.controller;

import io.javabrains.springbootstarter.bao.TimesheetService;
import io.javabrains.springbootstarter.model.Timesheet;
import io.javabrains.springbootstarter.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Controller
public class UserDataController {

    @Autowired
    TimesheetService timesheetService;


    //post user data
    @RequestMapping(value="/postuser",method=RequestMethod.POST)
    public void setUsersData(@RequestBody User user) {
        timesheetService.setUserData(user);
    }

    // get all users
    @RequestMapping("/getusers")
    public List<User> getUsersData() {
        return timesheetService.getUsersData();
    }


    // post timesheet
    @RequestMapping(value="/posttimesheet",method=RequestMethod.POST)
    public void setTimesheet(@RequestBody Timesheet timesheet){
        timesheetService.addTimesheet(timesheet);
    }

    // get all timesheets
    @RequestMapping(value="/gettimesheets")
    public List<Timesheet> getTimesheet(){
        return timesheetService.getTimesheets();
    }




}
