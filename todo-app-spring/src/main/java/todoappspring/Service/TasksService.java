package todoappspring.Service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import todoappspring.Entity.Tasks;

import java.util.List;
import java.util.Optional;

@Service

public interface TasksService {
    
    // create tasks
    ResponseEntity <String> createTasks(Tasks createTask);

    // get tasks
    List <Tasks> getAllTasks();

    // get tasks by id  
    Optional <Tasks> getTaskByID(String id);

    // update task by id
    ResponseEntity <String> updateTaskByID(String id, Tasks newTasks);

    // delete task by id
    ResponseEntity <String> deleteTaskByID(String id);
}
