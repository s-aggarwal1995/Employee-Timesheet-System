package io.javabrains.springbootstarter.controller;

import io.javabrains.springbootstarter.model.ConditionalTimesheet;
import io.javabrains.springbootstarter.model.TaskData;
import io.javabrains.springbootstarter.model.Timesheet;
import io.javabrains.springbootstarter.model.User;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface UserDataControllerIfc {

    public String setUsersData(@RequestBody User user);
    public String updateProjectManagerName(@RequestBody User user);
    public String updateClientManagerName(@RequestBody User user);
    public String addStakeholderEmail(@RequestBody User user);
    public String deleteStakeholderEmail(@RequestBody User user);
    public List<User> getUsersData();
    public String setTimesheet(@RequestBody Timesheet timesheet);
    public List<Timesheet> getTimesheet();
    public List<TaskData> getTasksData();
    public Timesheet getTimesheetsAccordingToWeek(@RequestBody ConditionalTimesheet conditionalTimesheet);

}