//@ts-nocheck
import { useState, useEffect } from 'react';
import Modal from 'react-lean-modal';
import axios from 'axios';
import { Badge, Button } from '../shared';
import {
  DeleteIcon,
  EditIcon,
  LeftArrowIcon,
  RightArrowIcon,
} from '../../utils/icons';
import { lastLogin } from '../../utils/helper';
import { usePagination } from '../../utils/hooks/';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TableData = () => {
  const perPage = 5;
  const [data, setData] = useState<[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>('2');
  const [userdata, setUserData] = useState<any>();

  useEffect(() => {
    axios('http://localhost:3001/users', {
      method: 'GET',
    })
      .then((res) => {
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
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  const handleDelete = (_id: any) => {
    axios(`http://localhost:3001/users/${_id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        toast.success('User deleted successfully');
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        toast.error('Something went wrong');
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
      const status = e.target.status.value;
      const role = e.target.role.value;

      axios(`http://localhost:3001/users/${userId}`, {
        method: 'PATCH',
        data: {
          name,
          email,
          status,
          role,
        },
      })
        .then((res) => {
          toast.success('User updated successfully');
          setShowModal(false);
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
          toast.error('Something went wrong');
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

            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 "
                htmlFor="status">
                Status
              </label>
              <select
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                id="status"
                name="status"
                defaultValue={userdata?.status}>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 "
                htmlFor="role">
                Role
              </label>
              <select
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                id="role"
                name="role"
                defaultValue={userdata?.role}>
                <option value="Admin">Admin</option>
                <option value="Sales Leader">Sales Leader</option>
                <option value="Sales Rep">Sales Rep</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="last-login"
                className="block mb-2 text-sm font-medium text-gray-900 ">
                Last Login
              </label>
              <input
                disabled
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                id="last-login"
                type="text"
                defaultValue={lastLogin}
              />
            </div>
            <Button type="secondary">
              <button>Submit</button>
            </Button>
          </form>
        </div>
      </>
    );
  };

  const _data = usePagination(data, perPage);

  const handleNextPage = () => {
    _data.next();
  };

  const handlePrevPage = () => {
    _data.prev();
  };

  return (
    <div className="bg-white p-4">
      <table>
        <thead>
          <tr className="text-xl text-gray-700">
            <th className="py-4">Name</th>
            <th className="py-4">Id</th>
            <th className="py-4">Email</th>
            <th className="py-4">Status</th>
            <th className="py-4">Role</th>
            <th className="py-4">Last Login</th>
            <th className="py-4">Actions</th>
          </tr>
        </thead>

        {_data.currentData().map((items) => {
          return (
            <>
              <tbody key={items._id}>
                <tr className="text-center text-gray-600">
                  <td className="px-16 py-2">{items.name}</td>
                  <td className="px-4 py-2">{items._id}</td>
                  <td className="px-4 py-2">{items.email}</td>
                  <td className="px-4 py-2">
                    <Badge
                      type={
                        items.status === 'Active' ? 'primary' : 'secondary'
                      }>
                      {items.status}
                    </Badge>
                  </td>
                  <td className="px-4 py-2">{items.role}</td>
                  <td className="px-4 py-2">{items.lastLogin}</td>
                  <td className="px-4 py-2 flex justify-center items-center">
                    <span
                      className="px-2 text-2xl cursor-pointer"
                      onClick={() => showEditForm(items._id)}>
                      <EditIcon />
                    </span>

                    <span
                      className="px-2 text-2xl cursor-pointer"
                      onClick={() => setShowDeleteModal(true)}>
                      <DeleteIcon />
                    </span>
                  </td>
                </tr>
              </tbody>
              <Modal
                enterAnimation="fade"
                exitAnimation="fade"
                timeout={250}
                isOpen={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                titleElement={<h3>Confirm Delete</h3>}
                children={
                  <div>
                    <h1>
                      Are you sure you want to delete this user? This action
                      cannot be undone.
                    </h1>
                    <div className="flex justify-center items-center">
                      <span className="px-2">
                        <Button
                          type="secondary"
                          handleClick={() => setShowDeleteModal(false)}>
                          <h1>No</h1>
                        </Button>
                      </span>
                      <span className="px-2">
                        <Button
                          type="primary"
                          handleClick={() => {
                            handleDelete(items._id);
                            setShowDeleteModal(false);
                          }}>
                          <h1>Yes</h1>
                        </Button>
                      </span>
                    </div>
                  </div>
                }
              />
            </>
          );
        })}
      </table>
      <hr />
      <div className="my-5">
        <div className="flex justify-between items-center px-24">
          <figure>
            <Button type="secondary" handleClick={handlePrevPage}>
              <div className="flex justify-center items-center">
                <span className="px-2 text-xl">
                  <LeftArrowIcon />
                </span>
                <span className="text-xl px-2">Previous</span>
              </div>
            </Button>
          </figure>
          <figure>
            <Button type="secondary" handleClick={handleNextPage}>
              <div className="flex justify-center items-center">
                <span className="text-xl px-2">Next</span>
                <span className="px-2 text-xl">
                  <RightArrowIcon />
                </span>
              </div>
            </Button>
          </figure>
        </div>
      </div>
      <Modal
        enterAnimation="fade"
        exitAnimation="fade"
        timeout={250}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        titleElement={<h3>Update User</h3>}
        children={<EditUserForm />}
      />
      <ToastContainer />
    </div>
  );
};

export default TableData;
