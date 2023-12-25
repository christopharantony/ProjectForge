import { useRef } from "react";
import Input from "../components/Input";
import PropTypes from "prop-types";
import Modal from "../components/Modal";
import { isAnyEmptyFields } from "../utils";
import Button from "../components/Button";

const AddForm = ({ onAdd, onCancel }) => {
  const modal = useRef(null);
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const handleSave = () => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const dueDate = dueDateRef.current.value;

    const values = { title, description, dueDate };
    if (isAnyEmptyFields(values)) {
      modal.current.open();
    } else {
      onAdd(values);
    }
  };
  return (
    <div className="mr-16">
      <menu className="flex items-center justify-end gap-4">
        <li>
          <button
            className="text-stone-800 hover:text-stone-950"
            onClick={onCancel}
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="rounded-md bg-stone-800 px-6 py-2 text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={titleRef} label="Title" />
        <Input textarea ref={descriptionRef} label="Description" />
        <Input type="date" ref={dueDateRef} label="Due Date" />
      </div>
      <Modal ref={modal} action={<Button>Okay</Button>}>
        <h2 className="my-4 text-xl font-bold text-stone-700">Invalid Input</h2>
        <p className="mb-4 text-stone-600">
          Oops... looks like you forgot to enter a value.
        </p>
        <p className="mb-4 text-stone-600">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
    </div>
  );
};

export default AddForm;

AddForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};
