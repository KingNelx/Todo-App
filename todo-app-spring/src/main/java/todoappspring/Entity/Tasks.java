package todoappspring.Entity;

import lombok.Getter;
import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Tasks")
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Tasks {

    @Id
    private @Getter @Setter String id;
    private @Getter @Setter String taskName;
    private @Getter @Setter String taskDescription;
    private @Getter @Setter String status;
    private @Getter @Setter String complexity;

}
