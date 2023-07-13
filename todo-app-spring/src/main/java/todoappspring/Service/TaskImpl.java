package todoappspring.Service;

import org.springframework.stereotype.Service;

import todoappspring.Repository.TaskRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import java.util.List;
import java.util.Optional;

@Service
public class TaskImpl implements TaskService {

    @Autowired
    private TaskRepo taskRepo;
    
    public ResponseEntity<String> createTask() {
        return taskRepo.sav
    }
}
