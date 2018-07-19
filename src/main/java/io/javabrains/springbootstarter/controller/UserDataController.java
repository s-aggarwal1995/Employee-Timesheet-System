package io.javabrains.springbootstarter.controller;

import io.javabrains.springbootstarter.bao.TimesheetService;
import io.javabrains.springbootstarter.bao.TimesheetServiceIfc;
import io.javabrains.springbootstarter.model.Task;
import io.javabrains.springbootstarter.model.TaskData;
import io.javabrains.springbootstarter.model.Timesheet;
import io.javabrains.springbootstarter.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@Controller
public class UserDataController implements UserDataControllerIfc{

    /**
     * programming to interfaces, using ifc as a reference variable
     */
    @Autowired
    TimesheetServiceIfc timesheetService;


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
    @RequestMapping(value="/posttimesheetdata",method=RequestMethod.POST)
    public void setTimesheet(@RequestBody Timesheet timesheet)
    {
        timesheetService.addTimesheet(timesheet);
    }

    // get all timesheets
    @RequestMapping(value="/gettimesheets")
    public List<Timesheet> getTimesheet(){

        return timesheetService.getTimesheets();
    }

    @RequestMapping("/gettasksdata")
    public List<TaskData> getTasksData()
    {
        return timesheetService.getTasksData();
    }



}
