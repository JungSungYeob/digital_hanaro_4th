package com.hana4.new_spring.domain;

import java.time.LocalDateTime;
import java.util.Date;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.annotation.LastModifiedDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "DemoPost")
@Getter
@Setter
public class Post {
	@Id
	@GeneratedValue(strategy = GenerationType.UUID)
	@Column(columnDefinition = "bigint unsigned")
	private Long id;

	private String title;

	private String writer;

	private String body;

	@CreationTimestamp
	@Column(name = "createdate")
	private Date createDate;

	@LastModifiedDate
	@Column(name = "workdate")
	private LocalDateTime updatedAt;

}
