package com.ilkay.taskJira.controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ilkay.taskJira.entity.dto.TaskDto;
import com.ilkay.taskJira.entity.service.TaskService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("/api/tasks")
@CrossOrigin("*")
public class TaskController {

	@Autowired
	private TaskService taskService;
	
	@PostMapping("/add-task")
	public ResponseEntity<TaskDto> saveTask(@RequestBody TaskDto taskDto) {
		if (taskDto != null) {
			taskService.saveTask(taskDto);
		}
		return ResponseEntity.ok(taskDto);
	}
	
	@GetMapping("/get-all-task")
	public ResponseEntity<Page<TaskDto>> getAllTasks(Pageable pageable) {
		Page<TaskDto> taskPage = taskService.getAllTasks(pageable);
		return ResponseEntity.ok(taskPage);
	}
	
	@GetMapping("/get-all-task-by-title/{key}")
	public ResponseEntity<Page<TaskDto>> getAllTasksByTitle(
	        Pageable pageable,
	        @PathVariable("key") String key) {
	    Page<TaskDto> taskPage = taskService.getAllTasksByTitle(key, pageable);
	    return ResponseEntity.ok(taskPage);
	}

	
	@GetMapping("/get-task/{id}")
	public ResponseEntity<TaskDto> getTasksById(@PathVariable("id") Long id) {
		return ResponseEntity.ok(taskService.getTaskById(id));
	}
	 
	
	@PutMapping("/update-task/{id}")
	public ResponseEntity<TaskDto> updateTask(@PathVariable("id") Long id, @RequestBody TaskDto taskDto) {
		return ResponseEntity.ok(taskService.updateTask(id, taskDto));
	}
	
	@DeleteMapping("/delete-task/{id}")
	public ResponseEntity<String> deleteTask(@PathVariable("id") Long id){
		if (id != null) {
			taskService.deleteTaskById(id);
		}
		return ResponseEntity.ok(id + " id'li task silindi");
	}
	
}
