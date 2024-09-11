package com.ilkay.taskJira.entity.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.ilkay.taskJira.entity.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long>{
	@Query("SELECT t FROM Task t WHERE t.title LIKE %:title%")
	Page<Task> findAllTasksByTitle(Pageable pageable,@Param("title") String title);

}
