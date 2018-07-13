package io.javabrains.springbootstarter.model;


import org.springframework.stereotype.Component;

import java.util.List;

public class Task {

    private String taskName;
    private Hours hours;


    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    public Hours getHours() {
        return hours;
    }

    public void setHours( Hours hours) {
        this.hours = hours;
    }

}
