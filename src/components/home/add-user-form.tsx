import { lastLogin } from '../../utils/helper';
import { Button } from '../shared';

const AddUserForm = () => {
  return (
    <div className="w-full max-w-xs">
      <form className="bg-white px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 "
            htmlFor="username">
            Name
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            id="username"
            type="text"
            placeholder="John Doe"
          />
        </div>

        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-medium text-gray-900 "
            htmlFor="email">
            Email
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            id="email"
            type="email"
            placeholder="johndoe@gmail.com"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="roles"
            className="block mb-2 text-sm font-medium text-gray-900 ">
            Role
          </label>
          <select
            id="roles"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            <option selected value={undefined}>
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
            id="status"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            <option selected value={undefined}>
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
            disabled
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            id="email"
            type="email"
            placeholder="johndoe@gmail.com"
            value={lastLogin}
          />
        </div>

        <Button type="primary">
          <span>Sign In</span>
        </Button>
      </form>
    </div>
  );
};

export default AddUserForm;
