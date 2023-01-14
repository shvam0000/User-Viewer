//@ts-nocheck
import { useState, useEffect } from 'react';
import Modal from 'react-lean-modal';
import axios from 'axios';
import { Badge, Button } from '../shared';
import { DeleteIcon, EditIcon } from '../../utils/icons';

const TableData = () => {
  const [data, setData] = useState<[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>('2');
  const [userdata, setUserData] = useState<any>();

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

  useEffect(() => {
    axios(`http://localhost:3001/users/${userId}`, {
      method: 'GET',
    })
      .then((res) => {
        console.log(res.data);
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

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

  const showEditForm = (id: string) => {
    setUserId(id);
    setShowModal(true);
  };

  const EditUserForm = () => {
    const handleUpdate = (e: any) => {
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      console.log('heheehe', email, name);

      axios(`http://localhost:3001/users/${userId}`, {
        method: 'PATCH',
        data: {
          name,
          email,
        },
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
      <>
        <div className="flex flex-col">{userId}</div>
        <div className="w-full max-w-sm">
          <form onSubmit={handleUpdate}>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 "
                htmlFor="username">
                Name
              </label>
              <input
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                type="text"
                id="name"
                name="name"
                defaultValue={userdata?.name}
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 "
                htmlFor="email">
                Email
              </label>
              <input
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                type="email"
                id="email"
                name="email"
                defaultValue={userdata?.email}
              />
            </div>

            {/* <div className="mb-4">
              <label
                htmlFor="last-login"
                className="block mb-2 text-sm font-medium text-gray-900 ">
                Last Login
              </label>
              <input
                disabled
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                id="email"
                type="email"
                placeholder="johndoe@gmail.com"
                value={lastLogin}
              />
            </div> */}
            <Button type="secondary">
              <button>Submit</button>
            </Button>
          </form>
        </div>
      </>
    );
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
                <span
                  className="px-2 text-2xl"
                  onClick={() => showEditForm(items._id)}>
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
      <Modal
        enterAnimation="fade"
        exitAnimation="fade"
        timeout={250}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        titleElement={<h3>Update User</h3>}
        children={<EditUserForm />}
      />
    </div>
  );
};

export default TableData;
