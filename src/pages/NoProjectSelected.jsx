import PropTypes from "prop-types";
import Notepad from "../assets/no-projects.png";
import Button from "../components/Button";

const NoProjectSelected = ({ onStartAddProject }) => {
  return (
    <div className="w-2/3 text-center">
      <img
        className="mx-auto h-16 w-16 object-contain"
        src={Notepad}
        alt="no project selected"
      />
      <h2 className="text-stone-500 my-4 text-xl font-bold">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one.
      </p>
      <p className="mt-8 flex justify-center">
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;

NoProjectSelected.propTypes = {
  onStartAddProject: PropTypes.func.isRequired,
};
