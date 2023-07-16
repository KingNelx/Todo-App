package todoappspring.Service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import todoappspring.Entity.Tasks;

import java.util.List;
import java.util.Optional;

@Service
public interface TasksService {

    // create task
    ResponseEntity <String> createTasks(Tasks createTasks);

    // get all tasks
    List <Tasks> getAllTasks();

    // get task by id
    Optional <Tasks> getTasksByID(String id);

    // update task by id
    ResponseEntity <String> updateTasksByID(String id, Tasks updateTasks);

    // delete task
    ResponseEntity <String> removeTasksByID(String id);
}
