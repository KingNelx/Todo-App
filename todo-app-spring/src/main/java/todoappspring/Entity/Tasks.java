package todoappspring.Entity;

import lombok.Getter;
import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import jakarta.persistence.Id;

import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.persistence.Entity;
import jakarta.persistence.GenerationType;
import jakarta.persistence.GeneratedValue;

@Document(collection = "Tasks")
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Tasks {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private @Getter @Setter String id;
    private @Getter @Setter String taskName;
    private @Getter @Setter String taskDescription;
    private @Getter @Setter String createdAt;
    private @Getter @Setter String dueDate;
    private @Getter @Setter String priority;
    private @Getter @Setter String status;
}
