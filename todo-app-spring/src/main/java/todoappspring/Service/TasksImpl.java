package todoappspring.Service;

import java.util.Optional;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.client.HttpClientErrorException;

import todoappspring.Entity.Tasks;
import todoappspring.Repository.TasksRepo;

@Service
public class TasksImpl implements TasksService {

    @Autowired
    private TasksRepo tasksRepo;

    @Override
    public ResponseEntity<String> createTasks(@RequestBody Tasks newTasks) {
        Optional<Tasks> doesTaskExist = tasksRepo.findById(newTasks.getId());

        if (doesTaskExist.isPresent()) {
            throw new HttpClientErrorException(HttpStatus.CONFLICT);
        }
        return ResponseEntity.ok(" TASK CREATED ");
    }

    @Override
    public List<Tasks> getAllTasks() {
        if (tasksRepo.findAll().isEmpty()) {
            throw new HttpClientErrorException(HttpStatus.NO_CONTENT);
        }
        return tasksRepo.findAll();
    }

    @Override
    public Optional<Tasks> getTasksByID(@PathVariable String id) {
        if (!tasksRepo.findById(id).isPresent()) {
            throw new HttpClientErrorException(HttpStatus.NOT_FOUND);
        }
        return tasksRepo.findById(id);
    }

    @Override
    public ResponseEntity<String> updateTasksByID(@PathVariable String id, @RequestBody Tasks updateTasks) {
        Tasks existingTasks = tasksRepo.findById(id)
                .orElseThrow(() -> new HttpClientErrorException(HttpStatus.NOT_FOUND));
        existingTasks.setTaskName(updateTasks.getTaskName());
        existingTasks.setTaskDescription(updateTasks.getTaskDescription());
        existingTasks.setDifficulty(updateTasks.getDifficulty());
        existingTasks.setCreatedAt(updateTasks.getCreatedAt());
        existingTasks.setDueDate(updateTasks.getDueDate());
        existingTasks.setPriority(updateTasks.getPriority());
        existingTasks.setStatus(updateTasks.getStatus());

        tasksRepo.save(existingTasks);

        return ResponseEntity.ok(" TASK UPDATED ");
    }

    @Override
    public ResponseEntity<String> removeTasksByID(@PathVariable String id) {
        if (!tasksRepo.findById(id).isPresent()) {
            throw new HttpClientErrorException(HttpStatus.NOT_FOUND);
        }

        tasksRepo.deleteById(id);
        return ResponseEntity.ok(" TASK ID: " + id + " HAS BEEN DELETED ");
    }

}
