package todoappspring.Service;

import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.config.Task;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public interface TaskService {

    ResponseEntity<String> createTask(Task newTask);

    List<Task> getAllTasks();

    Optional<Task> getTaskByID(String id);

    ResponseEntity<String> updateTaskByID(String id, Task newTask);

    ResponseEntity<String> deleteTaskByID(String id);
}
