import { notification } from 'antd';

export function useNotification() {
  const notify = (type, { message, description }) => {
    notification[type]({
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
