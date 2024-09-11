package com.ilkay.taskJira.exception;

import org.springframework.http.HttpStatus;

import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException{

	private static final long serialVersionUID = 185058045378935429L;

	public ResourceNotFoundException(String message) {
		super(message);
	}
}
