/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import usePostData from '../fetch-api-hooks/usePostData';
import useGetData from '../fetch-api-hooks/useGetData';
import usePutData from '../fetch-api-hooks/usePutData';
import useDeleteData from '../fetch-api-hooks/useDeleteData';

export default function Employee() {
  const { postAsJSON, result, postError, posting } = usePostData();
  const { data, getAsJSON } = useGetData();
  const { deleteError, deleteJSONData } = useDeleteData();
  const { putAsJSON, putError } = usePutData();
  const [firstName, setFirstName] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const [lastName, setLastName] = useState('');

  function get() {
    getAsJSON({ url: 'http://localhost:3000/api/getdata' });
  }
  useEffect(() => {
    get();
  });

  function post() {
    postAsJSON({
      url: 'http://localhost:3000/api/createdata',
      data: { firstName, lastName }
    });
  }

  function deleteData(d) {
    debugger;
    deleteJSONData({
      url: `http://localhost:3000/api/deletedata?id=${d._id}`
    });
  }

  function putData() {
    // putAsJSON({})
  }

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
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
              onChange={handleFirstNameChange}
              name="firstname"
            />
          </th>
          <th>
            <input
              type="text"
              placeholder="LastName"
              name="lastname"
              onChange={handleLastNameChange}
            />
          </th>
          <th>
            <button type="button" onClick={putAsJSON}>
              Update
            </button>
          </th>
          <th>
            <button type="button" onClick={post}>
              Insert
            </button>
          </th>
        </tr>
        {data &&
          data.map(d => {
            return (
              <tr key={d.message._id}>
                <td>{d.message.firstName}</td>
                <td>{d.message.lastName}</td>
                <td>
                  <button type="button">Edit</button>
                </td>
                <td>
                  <button type="button" onClick={() => deleteData(d)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
}
