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
    setLastName('');
    setFirstName('');
  }

  function deleteData(d) {
    debugger;
    deleteJSONData({
      url: `http://localhost:3000/api/deletedata?id=${d._id}`
    });

    setLastName('');
    setFirstName('');
    setSelectedId(null);
  }

  function putData() {
    debugger;
    putAsJSON({
      url: `http://localhost:3000/api/updatedata?id=${selectedId}`,
      data: { firstName, lastName }
    });
    setLastName('');
    setFirstName('');
    setSelectedId(null);
  }

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }
  function selectEmployee(id) {
    debugger;
    const employee = data.find(emp => emp._id === id);

    setSelectedId(id);
    setFirstName(employee.firstName);
    setLastName(employee.lastName);
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
              value={firstName}
            />
          </th>
          <th>
            <input
              value={lastName}
              type="text"
              placeholder="LastName"
              name="lastname"
              onChange={handleLastNameChange}
            />
          </th>
          <th>
            <button disabled={!selectedId} type="button" onClick={putData}>
              Update
            </button>
          </th>
          <th>
            <button
              disabled={selectedId || firstName === '' || lastName === ''}
              type="button"
              onClick={post}
            >
              Insert
            </button>
          </th>
        </tr>
        {data &&
          data.map(d => {
            return (
              <tr key={d._id}>
                <td>{d.firstName}</td>
                <td>{d.lastName}</td>
                <td>
                  <button type="button" onClick={() => selectEmployee(d._id)}>
                    Edit
                  </button>
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
