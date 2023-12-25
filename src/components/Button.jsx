import PropTypes from "prop-types";

const Button = ({ children, ...props }) => {
  const className =
    "px-4 py-2 w-48 flex items-center justify-center rounded-lg bg-gray-800 text-slate-200 hover:text-white shadow-md transition-shadow shadow-gray-900 hover:drop-shadow-xl active:drop-shadow-none active:shadow-none";
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
};
