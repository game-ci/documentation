import config from '@/core/config';
import { useUser } from 'reactfire';

export function useAuthenticatedEndpoint(endpoint: string, payload: { [key: string]: any }) {
  const { data: user } = useUser();

  return async () => {
    const token = await user.getIdToken();
    const response = await fetch(`${config.backendUrl}/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      method: 'POST',
      body: JSON.stringify(payload),
    });

    return response.json();
  };
}
