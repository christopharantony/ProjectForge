// import Loading from "./components/Loading";
import { useState } from "react";
import AddForm from "./pages/AddForm";
import Sidebar from "./layouts/Sidebar";
import NoProjectSelected from "./pages/NoProjectSelected";
import SelectedProject from "./pages/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: [],
  });

  const handleStartAddProject = () => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProject: null,
    }));
  };

  const handleCancelAddProject = () => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProject: undefined,
    }));
  };

  const handleAddProject = (project) => {
    setProjectsState((prevState) => {
      const projectId = Math.random().toString();
      const newProject = {
        ...project,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProject: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  const handleSelectProject = (id) => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProject: id,
    }));
  };

  const handleDeleteProject = () => {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProject: undefined,
      projects: prevState.projects.filter(
        (project) => project.id !== prevState.selectedProject,
      ),
    }));
  };

  const handleAddTask = (text) => {
    setProjectsState((prevState) => {
      const taskId = Math.random().toString();
      const newTask = {
        projectId: projectsState.selectedProject,
        id: taskId,
        text,
      };
      return {
        ...prevState,
        selectedProject: undefined,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  };

  const handleDeleteTask = (id) => {
    setProjectsState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  };

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProject,
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      tasks={projectsState.tasks}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
    />
  );

  if (projectsState.selectedProject === null) {
    content = (
      <AddForm onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProject === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="flex">
      <Sidebar
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
        projects={projectsState?.projects}
        selectedProjectId={projectsState?.selectedProject}
      />
      <div className="w-full py-16">{content}</div>
    </main>
  );
}

export default App;
