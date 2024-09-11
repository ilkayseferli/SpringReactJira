package com.ilkay.taskJira.entity.service;


import org.springframework.data.domain.Page;


import org.springframework.data.domain.Pageable;

import com.ilkay.taskJira.entity.dto.TaskDto;



public interface TaskService {
	public Page<TaskDto> getAllTasks(Pageable pageable);
	public Page<TaskDto> getAllTasksByTitle(String key,Pageable pageable);
	public TaskDto getTaskById(Long taskId);
	public TaskDto saveTask(TaskDto taskDto);
	public TaskDto updateTask(Long id,TaskDto taskDto);
	public void deleteTaskById(Long taskId);
}
