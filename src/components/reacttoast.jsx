import {
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineCloseCircle,
} from "react-icons/ai";
const icons = {
  success: <AiOutlineCheckCircle />,
  error: <AiOutlineCloseCircle />,
};

const Toast = ({ type, message, animation }) => {
  return (
    <div className={`toast ${type} ${animation}`}>
      {icons[type]}
      {message}
      <AiOutlineClose color="white" />
    </div>
  );
};
export default Toast;
