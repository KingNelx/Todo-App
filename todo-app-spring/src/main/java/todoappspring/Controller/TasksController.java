package todoappspring.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import todoappspring.Entity.Tasks;
import todoappspring.Service.TasksService;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api-task")
public class TasksController {

    @Autowired
    private TasksService tasksService;

    @PostMapping("/create-task")
    ResponseEntity <String> createTasks(@RequestBody Tasks createTask){
        return tasksService.createTask(createTask);
    }

    @GetMapping("/get-tasks")
    List <Tasks> getTasks(){
        return tasksService.getTasks();
    }

    @GetMapping("/get-tasks/{id}")
    Optional <Tasks> getTasksByID(@PathVariable String id){
        return tasksService.getTasksByID(id);
    }

    @PutMapping("/update-tasks/{id}")
    ResponseEntity <String> updateTasksByID(@PathVariable String id, @RequestBody Tasks newTasks){
        return tasksService.updateTasksByID(id, newTasks);
    }

    @DeleteMapping("/delete-task/{id}")
    ResponseEntity <String> deleteTasks(@PathVariable String id){
       return tasksService.deleteTaskByID(id);
    }

}
