package com.hana4.new_spring.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PostDTO {
	private Integer id;
	private String title;
	private String writer;
	private String body;

	@Override
	public String toString() {
		return "PostDTO{" +
			"id=" + id +
			", title='" + title + '\'' +
			", writer='" + writer + '\'' +
			", body='" + body + '\'' +
			'}';
	}
}
