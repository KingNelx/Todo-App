package todoappspring.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.client.HttpClientErrorException;
import todoappspring.Entity.Tasks;
import todoappspring.Repository.TasksRepo;
import java.util.Optional;
import java.util.List;

@Service
public class TasksImpl implements  TasksService{

    @Autowired
    private TasksRepo tasksRepo;

    @Override
    public ResponseEntity <String> createTask(@RequestBody Tasks createTasks){
        Optional <Tasks> existingTasks = tasksRepo.findByTaskName(createTasks.getTaskName());

        if(existingTasks.isPresent()){
            throw new HttpClientErrorException(HttpStatus.CONFLICT);
        }

        tasksRepo.save(createTasks);
        return ResponseEntity.status(HttpStatus.OK ).body(" TASK CREATED ");
    }

    @Override
    public List <Tasks> getTasks(){
      if(tasksRepo.findAll().isEmpty()){
          throw new HttpClientErrorException(HttpStatus.NO_CONTENT);
      }
      return tasksRepo.findAll();
    }

    @Override
    public Optional <Tasks> getTasksByID(@PathVariable String id){
        Optional <Tasks> existingTasks = tasksRepo.findById(id);

        if(!existingTasks.isPresent()){
            throw new HttpClientErrorException(HttpStatus.NOT_FOUND);
        }
        return tasksRepo.findById(id);
    }

    @Override
    public ResponseEntity <String> updateTasksByID(@PathVariable String id, @RequestBody Tasks newTasks){

        Tasks existingTasks = tasksRepo.findById(id).orElseThrow(() -> new HttpClientErrorException(HttpStatus.NOT_FOUND));
        existingTasks.setTaskName(newTasks.getTaskName());
        existingTasks.setTaskDescription(newTasks.getTaskDescription());
        existingTasks.setStatus(newTasks.getComplexity());
        existingTasks.setComplexity(newTasks.getComplexity());

        tasksRepo.save(existingTasks);
        return ResponseEntity.ok(" TASK UPDATED ");
    }

    @Override
    public ResponseEntity <String> deleteTaskByID(@PathVariable String id){
        Optional <Tasks> existingTask = tasksRepo.findById(id);

        if(existingTask.isEmpty()){
            throw new HttpClientErrorException(HttpStatus.NO_CONTENT);
        }

        tasksRepo.deleteById(id);
        return ResponseEntity.status(HttpStatus.OK).body(" TASK DELETED ");
    }
}
