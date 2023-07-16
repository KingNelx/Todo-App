package todoappspring.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import todoappspring.Entity.Tasks;

public interface TasksRepo extends MongoRepository <Tasks, String> {
    
}
