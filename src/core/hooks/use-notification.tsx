import {toast} from "react-hot-toast";

export function useNotification() {
  const notify = (type, {message, description}) => {
    toast[type]({
      message,
      description,
    });
  };

  return {
    success: (props) => notify('success', props),
    info: (props) => notify('info', props),
    warning: (props) => notify('warning', props),
    error: (props) => notify('error', props),
  };
}
