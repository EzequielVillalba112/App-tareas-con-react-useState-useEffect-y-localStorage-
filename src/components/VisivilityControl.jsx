export default function VisivilityControl({
  isChecked,
  setShowCompleted,
  deleteTask,
}) {
  const handleDelete = () => {
    if (window.confirm("¿Estas seguro/a de eliminar las tareas?")) {
      deleteTask();
    }
  };

  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary ">
      <div className="form-check form-switch ">
        <input
          className="form-check-input "
          type="checkbox"
          onChange={(e) => setShowCompleted(e.target.checked)}
          checked={isChecked}
        />{" "}
        <label>Mostrar tarea realizada.</label>
      </div>

      <button onClick={handleDelete} className="btn btn-danger ">
        Limpiar.
      </button>
    </div>
  );
}
