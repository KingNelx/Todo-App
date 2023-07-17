package todoappspring.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Optional;
import java.util.List;

import todoappspring.Entity.Tasks;
import todoappspring.Service.TasksService;

@RestController
@RequestMapping("/task-api")
public class TasksController {

    @Autowired
    private TasksService tasksService;

    @PostMapping("/create-tasks")
    ResponseEntity<String> createTasks(@RequestBody Tasks createTasks) {
        return tasksService.createTasks(createTasks);
    }

    @GetMapping("/get-tasks")
    List<Tasks> getAllTasks() {
        return tasksService.getAllTasks();
    }

    @GetMapping("/get-tasks/{id}")
    Optional<Tasks> getTasksByID(@PathVariable String id) {
        return tasksService.getTaskByID(id);
    }

    @PutMapping("/update-tasks/{id}")
    ResponseEntity<String> updateTasksByID(@PathVariable String id, @RequestBody Tasks newTasks) {
        return tasksService.updateTaskByID(id, newTasks);
    }

    @DeleteMapping("/delete-task/{id}")
    ResponseEntity<String> deleteTasksByID(@PathVariable String id) {
        return tasksService.deleteTaskByID(id);
    }
}
