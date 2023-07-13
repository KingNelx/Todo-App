package todoappspring.Service;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.client.HttpClientErrorException;

import todoappspring.Repository.TaskRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.config.Task;

import java.util.List;
import java.util.Optional;

@Service
public class TaskImpl implements TaskService {

    @Autowired
    private TaskRepo taskRepo;

    public ResponseEntity<String> createTask(@RequestBody Task newTask) {
        Task savedTask = taskRepo.save(newTask);
        if (savedTask == null) {
            throw new HttpClientErrorException(HttpStatus.BAD_REQUEST);
        }
        return ResponseEntity.ok(" NEW TASK ADDED ");
    }

    public List<Task> getAllTasks() {
        if (taskRepo.findAll().isEmpty()) {
            throw new HttpClientErrorException(HttpStatus.NO_CONTENT);
        }
        return taskRepo.findAll();
    }

    public Optional<Task> getTaskByID(@PathVariable String id) {

    }
}
