export default function TaskRow({task, taskToggle}) {
  return (
    <tr>
      <td className="d-flex justify-content-between ">
        {task.name}
        <input 
        type="checkbox" 
        checked={task.done}
        onChange={()=>{
            taskToggle(task);
        }} />
      </td>
    </tr>
  );
}
