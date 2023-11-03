import { useState, useEffect } from "react";
import TaskCreator from "./components/TaskCreator";
import TaskTable from "./components/TaskTable";
import "../src/css/index.css";
import VisivilityControl from "./components/VisivilityControl";
import Container from "./components/Container";

function App() {
  const [tasksItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  const createTask = (newTaskName) => {
    const validTask = tasksItems.find((task) => task.name === newTaskName);

    if (!validTask) {
      setTaskItems([...tasksItems, { name: newTaskName, done: false }]);
    }
  };

  const toggleTask = (task) => {
    setTaskItems(
      tasksItems.map((t) =>
        t.name === task.name ? { ...t, done: !t.done } : t
      )
    );
  };

  useEffect(() => {
    let data = localStorage.getItem("tasks");

    if (data) {
      setTaskItems(JSON.parse(data));
    }
  }, []);

  //Elimina tareas echas
  const delteTask = () => {
    setTaskItems(tasksItems.filter((task) => !task.done));
    setShowCompleted(false);
  };

  useEffect(() => {
    //Guarda las tasks en el local storage del navegador.
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);

  return (
    <main className="bg-dark vh-100 text-white">
      <Container>
        <TaskCreator createTask={createTask} />

        <TaskTable tasks={tasksItems} taskToggle={toggleTask} estado={false} />

        <VisivilityControl
          isChecked={showCompleted}
          setShowCompleted={(check) => setShowCompleted(check)}
          deleteTask={delteTask}
        />
        {showCompleted === true && (
          <TaskTable
            tasks={tasksItems}
            taskToggle={toggleTask}
            estado={showCompleted}
          />
        )}
      </Container>
    </main>
  );
}

export default App;
