package todoappspring.Entity;

import lombok.Getter;
import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = "Tasks")
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private @Getter @Setter String id;
    private @Getter @Setter String taskTitle;
    private @Getter @Setter String taskDescription;
    private @Getter @Setter String taskStatus;
    private @Getter @Setter String createdAt;
    private @Getter @Setter String finishAt;
}
