package com.example.springboot.controller;

import com.example.springboot.dto.ProjectDTO;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
@CrossOrigin(origins = "http://localhost:5555")
public class InfoController {
    @GetMapping("/project_info")
    public Object projectInfo(){
        ProjectDTO projectDTO = new ProjectDTO();
        projectDTO.project = "spring-boot";
        projectDTO.date = new Date();
        return projectDTO;
    }
}
