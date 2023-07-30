import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Start from "./Components/Start";
import ViewTasks from "./Components/ViewTasks";
import UpdateTasks from "./Components/UpdateTasks";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/view-task" element={<ViewTasks />} />
        <Route path="/update-tasks/:id" element={<UpdateTasks />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
