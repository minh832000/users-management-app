const UserList = ({ users, onUpdate, onDelete }) => {
  const handleDelete = (id) => {
    onDelete(id);
  };
  const handleUpdate = (user) => {
    onUpdate(user);
  };
  return (
    <div className="w-2/3 px-7 overflow-x-auto">
      {users.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Date of Birth</th>
              <th>Phonenumber</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.firstName}</td>
                  <td>{user.lastName}</td>
                  <td>{user.dateOfBirth}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.gender === 'M' ? 'Male' : 'Female'}</td>
                  <td className="text-center">
                    <button
                      className="mr-3 px-3 py-1 border rounded-md bg-red-500"
                      onClick={() => handleDelete(user.id)}>
                      <span className="font-medium text-sm">Delete</span>
                    </button>
                    <button
                      className="px-3 py-1 border rounded-md bg-green-500"
                      onClick={() => handleUpdate(user)}>
                      <span className="font-medium text-sm">Update</span>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      {users.length === 0 && <p>Users Empty</p>}
    </div>
  );
};

export default UserList;
