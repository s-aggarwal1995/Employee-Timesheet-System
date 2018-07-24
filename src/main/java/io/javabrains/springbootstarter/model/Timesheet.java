package io.javabrains.springbootstarter.model;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
@Document(collection = "Timesheets")
public class Timesheet {

    @Id
    private String id;

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    private String startDate;
    private String endDate;
    private List<String> dates;
    private List<Number> totalHoursForEachDate;
    private User user;
    private List<Task> tasks;
    private Number totalWeeklyHours;

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public List<String> getDates() {
        return dates;
    }

    public void setDates(List<String> dates) {
        this.dates = dates;
    }

    public List<Number> getTotalHoursForEachDate() {
        return totalHoursForEachDate;
    }

    public void setTotalHoursForEachDate(List<Number> totalHoursForEachDate) {
        this.totalHoursForEachDate = totalHoursForEachDate;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Task> getTasks() {
        return tasks;
    }

    public void setTasks(List<Task> tasks) {
        this.tasks = tasks;
    }

    public Number getTotalWeeklyHours() {
        return totalWeeklyHours;
    }

    public void setTotalWeeklyHours(Number totalWeeklyHours) {
        this.totalWeeklyHours = totalWeeklyHours;
    }


    public Timesheet(){
    }


}
