import { forwardRef } from "react";
import PropTypes from "prop-types";
import classes from "../styles/inputStyles";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  return (
    <p className="my-4 flex flex-col gap-1">
      <label className="text-stone-500 text-sm font-bold uppercase">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes.input} {...props} />
      ) : (
        <input ref={ref} className={classes.input} {...props} />
      )}
    </p>
  );
});

export default Input;

Input.propTypes = {
  label: PropTypes.string.isRequired,
  textarea: PropTypes.bool,
};
