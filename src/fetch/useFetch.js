import { useState } from 'react';

export default function useFetch() {
  const [result, setResult] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  async function postAsJSON({ url, body }) {
    try {
      const response = await fetch(url, body);
    } catch (err) {
      setFetchError(err);
    }
  }

  async function getAsJSON({ url }) {
    try {
      const response = await fetch(url);
      setResult(await response.json());
    } catch (err) {
      setFetchError(err);
    }
  }

  function putAsJSON() {}

  function deleteAsJSON() {}

  function postFile() {}

  function putFile() {}
  function getFile() {}
  return { postAsJSON, getAsJSON, fetchError, putAsJSON, deleteAsJSON };
}
