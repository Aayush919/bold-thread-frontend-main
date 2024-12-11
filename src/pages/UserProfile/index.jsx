import React, { useState } from "react";

const UserProfile = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "(123) 456-7890",
    address: "123 Main St, Anytown, USA 12345",
  });

  const [editableUser, setEditableUser] = useState({ ...user });

  const handleEdit = () => {
    setEditMode(true);
    setEditableUser({ ...user });
  };

  const handleSave = () => {
    setUser({ ...editableUser });
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditMode(false);
    setEditableUser({ ...user });
  };

  return (
    <>
      {/* Profile Picture */}
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
      >
        <img
          src="https://via.placeholder.com/50"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
      </button>

      {/* Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setIsDrawerOpen(false)}
          ></div>

          {/* Drawer Content */}
          <div className="w-96 bg-white shadow-lg overflow-hidden relative">
            {/* Close Icon */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsDrawerOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="p-4 border-b">
              <h3 className="text-lg font-bold">User Profile</h3>
            </div>
            <div className="p-4 space-y-4">
              {/* Form */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                {editMode ? (
                  <input
                    type="text"
                    value={editableUser.name}
                    onChange={(e) =>
                      setEditableUser({ ...editableUser, name: e.target.value })
                    }
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  />
                ) : (
                  <p className="mt-1">{user.name}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                {editMode ? (
                  <input
                    type="email"
                    value={editableUser.email}
                    onChange={(e) =>
                      setEditableUser({
                        ...editableUser,
                        email: e.target.value,
                      })
                    }
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  />
                ) : (
                  <p className="mt-1">{user.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                {editMode ? (
                  <input
                    type="text"
                    value={editableUser.phone}
                    onChange={(e) =>
                      setEditableUser({
                        ...editableUser,
                        phone: e.target.value,
                      })
                    }
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  />
                ) : (
                  <p className="mt-1">{user.phone}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                {editMode ? (
                  <textarea
                    value={editableUser.address}
                    onChange={(e) =>
                      setEditableUser({
                        ...editableUser,
                        address: e.target.value,
                      })
                    }
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  />
                ) : (
                  <p className="mt-1">{user.address}</p>
                )}
              </div>
            </div>
            <div className="p-4 border-t flex justify-end space-x-2">
              {editMode ? (
                <>
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <button
                  onClick={handleEdit}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserProfile;
