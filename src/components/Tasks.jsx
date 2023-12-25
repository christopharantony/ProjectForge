import PropTypes from "prop-types";
import NewTask from "./NewTask";

const Tasks = ({ tasks, onAdd, onDelete }) => {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-stone-700">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="my-4 text-stone-800">
          This project doesn&apos;t have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="mt-8 rounded-md bg-stone-100 p-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="my-4 flex items-center justify-between"
            >
              <span className="text-stone-800">{task.text}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDelete(task.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Tasks;

Tasks.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      projectId: PropTypes.string,
    }),
  ),
};
