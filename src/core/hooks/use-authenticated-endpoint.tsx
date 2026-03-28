import { useUser } from 'reactfire';
import config from '@site/src/core/config';

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

    const body = await response.json();
    if (!response.ok) {
      const detail = body.error ? `${body.message}: ${body.error}` : body.message;
      throw new Error(detail || `Request failed (${response.status})`);
    }
    return body;
  };
}
