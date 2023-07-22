package todoappspring.Service;

import org.springframework.stereotype.Service;
import org.springframework.http.ResponseEntity;
import todoappspring.Entity.Tasks;

import java.util.List;
import java.util.Optional;
@Service
public interface TasksService {

    // create tasks
    ResponseEntity <String> createTask(Tasks createTask);

    // get tasks
    List <Tasks> getTasks();
    // get tasks by id
    Optional <Tasks> getTasksByID(String id);
    // update task by id
    ResponseEntity <String> updateTasksByID(String id, Tasks updateTasks);

    // delete task by id
    ResponseEntity <String> deleteTaskByID(String id);
}
