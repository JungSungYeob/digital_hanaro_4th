package com.hana4.new_spring.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.hana4.new_spring.dto.PostDTO;

@Repository
@Mapper
public interface PostDAO {
	PostDTO getPostById(Integer id);

	List<PostDTO> getAllPosts();

	void addPost(PostDTO postDTO);

	void updatePost(PostDTO postDTO);

	void deletePost(Integer id);
}
