import TaskRow from "./TaskRow";

export default function TaskTable({ tasks, taskToggle, estado }) {
  const taskTableRows = (doneValue) => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow task={task} key={task.name} taskToggle={taskToggle} />
      ));
  };

  return (
    <table className="table table-dark table-striped table-bordered border-secondary ">
      <thead className="table-primary ">
        <tr>
          <th>Tareas</th>
        </tr>
      </thead>

      <tbody>{taskTableRows(estado)}</tbody>
    </table>
  );
}
