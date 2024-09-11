package com.ilkay.taskJira.entity.mapper;

import org.springframework.stereotype.Component;

import com.ilkay.taskJira.entity.Task;
import com.ilkay.taskJira.entity.dto.TaskDto;

@Component
public class TaskMapper {
	
	public static Task convertToEntity(TaskDto taskDto) {
		return new Task(taskDto.getId(), taskDto.getTitle(), taskDto.getText());
	}
	public static TaskDto convertToDto(Task task) {
		return new TaskDto(task.getId(), task.getTitle(), task.getText());
	}
	
}
