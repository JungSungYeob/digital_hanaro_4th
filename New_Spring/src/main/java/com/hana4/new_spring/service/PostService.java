package com.hana4.new_spring.service;

import com.hana4.new_spring.dao.PostDAO;

public class PostService {
	private final PostDAO dao;

	public PostService(PostDAO dao) {
		this.dao = dao;
	}
}
