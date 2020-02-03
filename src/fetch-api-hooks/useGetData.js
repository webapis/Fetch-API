import { useState } from 'react';

export default function useGetData() {
  const [data, setData] = useState(null);
  const [getError, setError] = useState(null);
  async function getAsJSON({ url }) {
    try {
      const response = await fetch(url);
      setData(await response.json());
    } catch (err) {
      setError(err);
    }
  }

  return { getAsJSON, getError, data };
}
