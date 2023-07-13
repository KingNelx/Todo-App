package todoappspring.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.scheduling.config.Task;

public interface TaskRepo extends MongoRepository <Task, String>{
    
}
