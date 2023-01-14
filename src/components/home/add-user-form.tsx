import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { lastLogin } from '../../utils/helper';
import { Button } from '../shared';

const AddUserForm = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [role, setRole] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const url = 'http://localhost:3001/users';
    axios(url, {
      method: 'POST',
      data: {
        name: name,
        email: email,
        status: status,
        role: role,
        lastLogin: lastLogin,
      },
    })
      .then((res) => {
        console.log(res);
        toast.success('User added successfully');
        // navigate('/');
        setName('');
        setEmail('');
        setRole('');
        setStatus('');
      })
      .catch((err) => {
        console.log(err);
        toast.error('Something went wrong');
      });
  };

  return (
    <div className="w-full max-w-xs">
      <form onSubmit={handleSubmit} className="bg-white px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 "
            htmlFor="username">
            Name
          </label>
          <input
            required
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            id="username"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            id="email"
            type="email"
            placeholder="johndoe@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="roles"
            className="block mb-2 text-sm font-medium text-gray-900 ">
            Role
          </label>
          <select
            required
            onChange={(e) => setRole(e.target.value)}
            id="roles"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            <option defaultChecked value={undefined}>
              Choose a role
            </option>
            <option value="Admin">Admin</option>
            <option value="Sales Leader">Sales Leader</option>
            <option value="Sales Rep">Sales Rep</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="status"
            className="block mb-2 text-sm font-medium text-gray-900 ">
            Status
          </label>
          <select
            required
            onChange={(e) => setStatus(e.target.value)}
            id="status"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            <option defaultChecked value={undefined}>
              Choose a status
            </option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="last-login"
            className="block mb-2 text-sm font-medium text-gray-900 ">
            Last Login
          </label>
          <input
            required
            disabled
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            id="last-login"
            type="text"
            value={lastLogin}
          />
        </div>

        <Button type="secondary">
          <button>Submit</button>
        </Button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddUserForm;
