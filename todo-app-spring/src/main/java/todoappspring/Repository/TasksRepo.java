package todoappspring.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import todoappspring.Entity.Tasks;
import java.util.Optional;
public interface TasksRepo extends MongoRepository <Tasks, String> {

    Optional <Tasks> findByTaskName(String taskname);
}
