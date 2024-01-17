import { useState, useEffect } from 'react';

import Banner from './Banner';
import MainContent from './MainContent';
import UserForm from './UserForm';
import UserList from './UserList';

import userAPI from '../services/user.service';

const UserManagement = () => {
  const [users, setUsers] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const getAllUsers = async () => {
    const res = await userAPI.index();
    if (res) {
      setUsers(res);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleChangeForm = async (dt) => {
    alert('Wait a minute...');
    if (!selectedUser) {
      const res = await userAPI.create(dt);
      if (res) {
        alert(`Add new user ${res.firstName} successfully!`);
        getAllUsers();
      }
    } else {
      const res = await userAPI.update(dt);
      if (res) {
        setSelectedUser(null);
        alert(`Update user ${res.firstName} successfully`);
        getAllUsers();
      }
    }
  };

  const handleUpdateUser = (user) => {
    setSelectedUser(user);
  };

  const handleDeleteUser = async (id) => {
    alert('Wait a minute...');
    const res = await userAPI.delete(id);
    if (res) {
      alert(`Delete user ${res.firstName} successfully!!!`);
      getAllUsers();
      if (selectedUser) {
        setSelectedUser(null);
      }
    }
  };

  return (
    <>
      <Banner />
      <MainContent>
        <UserForm
          onChangeForm={(value) => handleChangeForm(value)}
          user={selectedUser}
        />
        {users && (
          <UserList
            users={users}
            onDelete={(id) => handleDeleteUser(id)}
            onUpdate={(value) => handleUpdateUser(value)}
          />
        )}
        {!users && <p>Loading...</p>}
      </MainContent>
    </>
  );
};

export default UserManagement;
