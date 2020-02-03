import { useState } from 'react';

export default function usePostData() {
  const [postResult, setPostResult] = useState(null);
  const [postError, setError] = useState(null);
  async function postAsJSON({ data, url }) {
    try {
      const result = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      setPostResult(result);
    } catch (err) {
      setError(err);
    }
  }

  return { postAsJSON, postResult, postError };
}
