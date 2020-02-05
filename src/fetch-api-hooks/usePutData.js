import { useState } from 'react';

export default function usePutData() {
  const [putResult, setPutResult] = useState(null);
  const [putError, setPutError] = useState(null);
  async function putAsJSON({ data, url }) {
    try {
      debugger;
      const result = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      debugger;
      setPutResult(result);
    } catch (err) {
      setPutError(err);
    }
  }

  return { putAsJSON, putResult, putError };
}
