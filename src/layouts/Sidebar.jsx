import classes from "../styles/sidebarStyles";
import Button from "../components/Button";
import PropTypes from "prop-types";

const Sidebar = ({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) => {
  return (
    <aside className={classes.root}>
      <p className={classes.name}>Your Projects</p>
      <Button onClick={onStartAddProject}>
        <svg
          className="mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          ></path>
        </svg>
        Add Project
      </Button>
      <ul className={classes.projectList}>
        {projects.map((project) => {
          let btnStyle = classes.projectButton;
          if (project.id === selectedProjectId)
            btnStyle += " " + classes.selected;
          return (
            <button
              key={project?.id}
              className={btnStyle}
              onClick={() => {
                onSelectProject(project?.id);
              }}
            >
              {project.title}
            </button>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;

Sidebar.propTypes = {
  onStartAddProject: PropTypes.func.isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      dueDate: PropTypes.string,
    }),
  ),
  onSelectProject: PropTypes.func.isRequired,
  selectedProjectId: PropTypes.string,
};
