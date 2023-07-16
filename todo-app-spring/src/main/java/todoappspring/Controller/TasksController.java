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
import java.util.List;
import java.util.Optional;
import todoappspring.Entity.Tasks;
import todoappspring.Service.TasksService;

@RestController
@RequestMapping("/api-task")
public class TasksController {

    @Autowired
    private TasksService tasksService;

    @PostMapping("/create-task")
    ResponseEntity<String> createTasks(@RequestBody Tasks createTasks) {
        return tasksService.createTasks(createTasks);
    }

    @GetMapping("/get-task")
    List<Tasks> getAllTasks() {
        return tasksService.getAllTasks();
    }

    @GetMapping("/get-task/{id}")
    Optional<Tasks> getTaskByID(@PathVariable String id) {
        return tasksService.getTasksByID(id);
    }

    @PutMapping("/update-task/{id}")
    ResponseEntity<String> updateTasks(@PathVariable String id, @RequestBody Tasks updateTasks) {
        return tasksService.updateTasksByID(id, updateTasks);
    }

    @DeleteMapping("/delete-tasks")
    ResponseEntity<String> removeTasksByID(@PathVariable String id) {
        return tasksService.removeTasksByID(id);
    }
}
