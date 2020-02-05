import { useState } from 'react';

export default function useDeleteData() {
  const [data, setData] = useState(null);
  const [deleteError, setDeleteError] = useState(null);
  async function deleteJSONData({ url }) {
    try {
      const response = await fetch(url, { method: 'DELETE' });
      setData(await response.json());
      debugger;
    } catch (err) {
      debugger;
      setDeleteError(err);
    }
  }

  return { deleteJSONData, deleteError, data };
}
