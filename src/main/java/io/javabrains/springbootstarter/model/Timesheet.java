package io.javabrains.springbootstarter.model;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

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
    private List<String> totalHoursForEachDate;
    private User user;
    private List<Task> tasks;
    private String totalWeeklyHours;

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

    public List<String> getTotalHoursForEachDate() {
        return totalHoursForEachDate;
    }

    public void setTotalHoursForEachDate(List<String> totalHoursForEachDate) {
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

    public String getTotalWeeklyHours() {
        return totalWeeklyHours;
    }

    public void setTotalWeeklyHours(String totalWeeklyHours) {
        this.totalWeeklyHours = totalWeeklyHours;
    }


    public Timesheet(){
    }


}
