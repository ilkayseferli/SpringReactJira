package com.ilkay.taskJira.entity.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.ilkay.taskJira.entity.Task;
import com.ilkay.taskJira.entity.dto.TaskDto;
import com.ilkay.taskJira.entity.mapper.TaskMapper;
import com.ilkay.taskJira.entity.repository.TaskRepository;
import com.ilkay.taskJira.entity.service.TaskService;
import com.ilkay.taskJira.exception.ResourceNotFoundException;

@Service
public class TaskServiceImpl implements TaskService{

	@Autowired
	private TaskRepository taskRepository;
	
	@Override
	public Page<TaskDto> getAllTasks(Pageable pageable) {
		Page<Task> tasks = taskRepository.findAll(pageable);
		return tasks.map(TaskMapper::convertToDto);
	}

	@Override
	public TaskDto getTaskById(Long taskId) {
		return TaskMapper.convertToDto(taskRepository.findById(taskId).orElseThrow(() -> 
			new ResourceNotFoundException(taskId + " id'li task bulunamadı.")));
	}

	@Override
	public TaskDto saveTask(TaskDto taskDto) {
		if (taskDto != null) {
			taskRepository.save(TaskMapper.convertToEntity(taskDto));
		}
		return taskDto;
	}

	@Override
	public TaskDto updateTask(Long id, TaskDto taskDto) {
		Task task = taskRepository.findById(id).orElseThrow(() -> 
		new ResourceNotFoundException(id + " id'li task bulunamadı."));
		task.setTitle(taskDto.getTitle());
		task.setText(taskDto.getText());
		taskRepository.save(task);
		return taskDto;
	}

	@Override
	public void deleteTaskById(Long taskId) {
		taskRepository.deleteById(taskId);
	}

	@Override
	public Page<TaskDto> getAllTasksByTitle(String key,Pageable pageable ) {
		Page<Task> tasks = taskRepository.findAllTasksByTitle(pageable,key);
		return tasks.map(TaskMapper::convertToDto);
	}

	


}
