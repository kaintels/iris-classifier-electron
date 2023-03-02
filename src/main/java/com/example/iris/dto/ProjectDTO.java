package com.example.iris.dto;

import java.util.Date;

public class ProjectDTO {
    public String getProject() {
        return project;
    }

    public void setProject(String project) {
        this.project = project;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String project;
    public Date date;
}
