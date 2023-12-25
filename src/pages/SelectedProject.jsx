import PropTypes from "prop-types";
import Tasks from "../components/Tasks";

const SelectedProject = ({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) => {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-Us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="mt-16 w-[35rem]">
      <header className="mb-4 border-b-2 border-stone-300 pb-4">
        <div className="flex items-center justify-between">
          <h1 className="mb-2 text-3xl font-bold text-stone-600">
            {project.title}
          </h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="whitespace-pre-wrap text-stone-600">
          {project.description}
        </p>
      </header>
      <Tasks onAdd={onAddTask} onDelet={onDeleteTask} tasks={tasks} />
    </div>
  );
};

export default SelectedProject;

SelectedProject.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    dueDate: PropTypes.string,
  }),
  onDelete: PropTypes.func.isRequired,
  onAddTask: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      projectId: PropTypes.string,
    }),
  ),
};
