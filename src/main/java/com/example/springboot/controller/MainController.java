package com.example.springboot.controller;

import com.example.springboot.vo.FormDVO;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;


@Controller
public class MainController {

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @PostMapping("predict")
    public String hello(FormDVO formDVO, Model model) {
        model.addAttribute("data", formDVO.getA());
        System.out.println(formDVO.getA());
        return "predict";
    }
}