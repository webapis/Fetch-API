import React, { useState } from 'react';
import usePostData from '../fetch-api-hooks/usePostData';
import useGetData from '../fetch-api-hooks/useGetData';
import usePutData from '../fetch-api-hooks/usePutData';
import useDeleteData from '../fetch-api-hooks/useDeleteData';

export default function PutDataComponent({ updataState }) {
  const { postAsJSON, result, postError, posting } = useGetData();
  const [message, setMessage] = useState('');
  function post() {
    postAsJSON({ url: 'http://localhost:3000/api/createdata' });
  }

  function handleChange(e) {
    setMessage(e.target.value);
  }

  if (postError) {
    return <div>{postError.message}</div>;
  }
  if (posting) {
    return <div>Posting data...</div>;
  }

  return (
    <div className="root">
      <table className="ta">
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>CRUD</th>
          <th>CRUD</th>
        </tr>
        <tr>
          <th>
            <input
              type="text"
              placeholder="FirstName"
              onChange={handleChange}
              name="firstname"
            />
          </th>
          <th>
            <input
              type="text"
              placeholder="LastName"
              name="lastname"
              onChange={handleChange}
            />
          </th>
          <th>
            <button type="button">Update</button>
          </th>
          <th>
            <button type="button">Insert</button>
          </th>
        </tr>
        <tr>
          <td>January</td>
          <td>$100</td>
          <td>
            <button type="button">Edit</button>
          </td>
          <td>
            <button type="button">Delete</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
