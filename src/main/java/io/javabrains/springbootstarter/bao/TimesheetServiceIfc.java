package io.javabrains.springbootstarter.bao;

import io.javabrains.springbootstarter.model.TaskData;
import io.javabrains.springbootstarter.model.Timesheet;
import io.javabrains.springbootstarter.model.User;

import java.util.List;

public interface TimesheetServiceIfc {

    public List<User> getUsersData();
    public void setUserData(User user);
    public String addTimesheet(Timesheet timesheet);
    public List<Timesheet> getTimesheets();
    public List<TaskData> getTasksData();
    public void exportToExcel(Timesheet timesheet);
    public Timesheet getTimesheetsAccordingToWeek(String startDate, User user);
}
