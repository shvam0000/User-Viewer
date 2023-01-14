//@ts-nocheck
import { useState, useEffect } from 'react';
import { DeleteIcon, EditIcon } from '../../utils/icons';
import axios from 'axios';
import { Badge } from '../shared';
const TableData = () => {
  const [data, setData] = useState<[]>([]);

  useEffect(() => {
    axios('http://localhost:3001/users', {
      method: 'GET',
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (_id: any) => {
    alert(_id);
    axios(`http://localhost:3001/users/${_id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        console.log(res);
        alert(res);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  return (
    <div className="bg-white p-4">
      <table>
        <tr className="text-2xl">
          <th>Name</th>
          <th>Id</th>
          <th>Email</th>
          <th>Status</th>
          <th>Role</th>
          <th>Last Login</th>
          <th>Actions</th>
        </tr>

        {data.map((items) => {
          return (
            <tr className="text-center">
              <td className="px-16" key={items._id}>
                {items.name}
              </td>
              <td className="px-4">{items._id}</td>
              <td className="px-4">{items.email}</td>
              <td className="px-4">
                <Badge
                  //@ts-ignore
                  type={items.status === 'Active' ? 'primary' : 'secondary'}>
                  {items.status}
                </Badge>
              </td>
              <td className="px-4">{items.role}</td>
              <td className="px-4">{items.lastLogin}</td>
              <td className="px-4 flex justify-center items-center">
                <span className="px-2 text-2xl">
                  <EditIcon />
                </span>
                <span
                  className="px-2 text-2xl cursor-pointer"
                  onClick={() => handleDelete(items._id)}>
                  <DeleteIcon />
                </span>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default TableData;
