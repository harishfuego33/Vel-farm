import {
  AiOutlineCheckCircle,
  AiOutlineClose,
  AiOutlineCloseCircle,
  AiOutlineInfo,
} from "react-icons/ai";
const icons = {
  success: <AiOutlineCheckCircle />,
  error: <AiOutlineCloseCircle />,
  info: <AiOutlineInfo />,
};

const Toast = ({ type, message, animation, onClose }) => {
  return (
    <div className={`toast ${type} ${animation}`}>
      {icons[type]}
      {message}
      <AiOutlineClose color="white" onClick={onClose} />
    </div>
  );
};
export default Toast;
