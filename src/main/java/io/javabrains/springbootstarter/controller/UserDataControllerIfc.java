package io.javabrains.springbootstarter.controller;

import io.javabrains.springbootstarter.model.Task;
import io.javabrains.springbootstarter.model.TaskData;
import io.javabrains.springbootstarter.model.Timesheet;
import io.javabrains.springbootstarter.model.User;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public interface UserDataControllerIfc {

    public void setUsersData(@RequestBody User user);
    public List<User> getUsersData();
    public void setTimesheet(@RequestBody Timesheet timesheet);
    public List<Timesheet> getTimesheet();
    public List<TaskData> getTasksData();



}
