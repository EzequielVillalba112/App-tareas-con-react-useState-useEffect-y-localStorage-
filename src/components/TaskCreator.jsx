import { useState } from "react";

export default function TaskCreator({ createTask }) {
  const [newTaskName, setNewTaskName] = useState("");

  const handleSubmit = (e) => {
    //Evita que el formulario envie el dato.
    e.preventDefault();
    //Limpia el input.
    setNewTaskName("");

    createTask(newTaskName);
  };

  return (
    <form onSubmit={handleSubmit} className="my-2 row ">
      <div className="col-9 ">
        <input
          type="text"
          placeholder="Ingrese una nueva tarea."
          value={newTaskName}
          onChange={(e) => {
            setNewTaskName(e.target.value);
          }}
          className="form-control"
        />
      </div>

      <div className="col-3">
        <button className="btn btn-primary btn-sm ">Guardar tarea</button>
      </div>
    </form>
  );
}
