package com.hana4.new_spring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hana4.new_spring.service.PostService;

@Controller
public class PostController {
	private final PostService postService;

	public PostController(PostService postService) {
		this.postService = postService;
	}

	@RequestMapping("/posts")
	public String postList(Model model) {
		model.addAttribute("version", "0.0.1");
	}
}
