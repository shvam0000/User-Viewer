import React from 'react';
import { Badge, Button } from '../shared';
import { PlusIcon, DownloadIcon } from '../../utils/icons';

const Table = () => {
  return (
    <div className="border-2 border-gray px-10 py-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center">
            <h3 className="pr-2 text-xl">Users</h3>
            <div>
              <Badge type="primary">
                <span>48 Users</span>
              </Badge>
            </div>
          </div>
          <p className="text-gray-400 pt-2">
            Manage your team members and their account permissions here.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="px-2">
            <Button type="secondary">
              <div className="flex justify-center items-center">
                <span className="px-1 text-xl">
                  <DownloadIcon />
                </span>
                <span className="px-1">Download CSV</span>
              </div>
            </Button>
          </div>
          <div className="px-2">
            <Button type="primary">
              <div className="flex items-center justify-center">
                <span className="px-1">
                  <PlusIcon />
                </span>
                <span className="px-1">Add User</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
