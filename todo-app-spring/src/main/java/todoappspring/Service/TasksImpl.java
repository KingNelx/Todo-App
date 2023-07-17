package todoappspring.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.client.HttpClientErrorException;
import java.util.List;
import java.util.Optional;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import todoappspring.Entity.Tasks;
import todoappspring.Repository.TasksRepo;

@Service
public class TasksImpl implements TasksService {

    @Autowired
    private TasksRepo tasksRepo;

    @Override
    public ResponseEntity<String> createTasks(@RequestBody Tasks createTasks) {
        tasksRepo.save(createTasks);
        return ResponseEntity.ok(" NEW TASK ADDED ");
    }

    @Override
    public List<Tasks> getAllTasks() {
        if (tasksRepo.findAll().isEmpty()) {
            throw new HttpClientErrorException(HttpStatus.NO_CONTENT);
        }
        return tasksRepo.findAll();
    }

    @Override
    public Optional<Tasks> getTaskByID(@PathVariable String id) {
        if (!tasksRepo.findById(id).isPresent()) {
            throw new HttpClientErrorException(HttpStatus.NOT_FOUND);
        }
        return tasksRepo.findById(id);
    }

    @Override
    public ResponseEntity<String> updateTaskByID(@PathVariable String id, @RequestBody Tasks newTasks) {
        Tasks existingTasks = tasksRepo.findById(id)
                .orElseThrow(() -> new HttpClientErrorException(HttpStatus.NOT_FOUND));

        existingTasks.setTaskName(newTasks.getTaskName());
        existingTasks.setTaskDescription(newTasks.getTaskDescription());
        existingTasks.setDifficulty(newTasks.getDifficulty());
        existingTasks.setCreatedAt(newTasks.getCreatedAt());
        existingTasks.setDueDate(newTasks.getDueDate());
        existingTasks.setStatus(newTasks.getStatus());
        existingTasks.setPriority(newTasks.getPriority());

        tasksRepo.save(existingTasks);

        return ResponseEntity.ok(" TASKS DATA: " + id + " HAS BEEN UPDATED ");
    }

    @Override
    public ResponseEntity<String> deleteTaskByID(@PathVariable String id) {
        if (!tasksRepo.findById(id).isPresent()) {
            throw new HttpClientErrorException(HttpStatus.NOT_FOUND);
        }
        tasksRepo.deleteById(id);
        return ResponseEntity.ok(" TASK DATA WITH ID: " + id + " HAS BEEN DELETED ");
    }
}
