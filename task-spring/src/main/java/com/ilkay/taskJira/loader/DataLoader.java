package com.ilkay.taskJira.loader;

import com.ilkay.taskJira.entity.Task;
import com.ilkay.taskJira.entity.repository.TaskRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataLoader {

	@Bean
    CommandLineRunner loadData(TaskRepository taskRepository) {
        return args -> {
            for (int i = 1; i <= 100; i++) {
                Task task = new Task();
                task.setTitle("Test Task " + i);
                task.setText("This is test task number " + i + ".");

                // Veritabanına kaydetme
                taskRepository.save(task);
            }

            System.out.println("100 test verisi başarıyla yüklendi.");
        };
    }
}
