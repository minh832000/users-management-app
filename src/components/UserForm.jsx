import { useEffect, useState } from 'react';

const UserForm = ({ onChangeForm, user }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    dateOfBirth: '',
    gender: '',
  });

  useEffect(() => {
    if (user) {
      const { firstName, lastName, dateOfBirth, phoneNumber, gender } = user;
      setFormData({
        firstName,
        lastName,
        phoneNumber,
        dateOfBirth,
        gender,
      });
    } else {
      // reset state
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          phoneNumber: '',
          dateOfBirth: '',
          gender: '',
        });
      }, 3000);
    }
  }, [user]);
  const handleInput = (e) => {
    const { name: fieldName, value: fieldValue } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [fieldName]: fieldValue,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...formData };

    if (!user) {
      // binding form data "new user" to User Management
      onChangeForm(data);
    } else {
      data['id'] = user.id;
      onChangeForm(data);
    }

    // reset state
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        dateOfBirth: '',
        gender: '',
      });
    }, 3000);
  };

  return (
    <div className="w-1/3 px-7">
      <form onSubmit={(e) => handleSubmit(e)}>
        {/* First Name Field */}
        <div className="mb-5">
          <div className="flex flex-col">
            <label htmlFor="firstName" className="mb-3 font-medium">
              First Name:
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="border rounded-lg outline-none focus:border-cyan-500 px-5 py-2 placeholder:text-sm"
              value={formData.firstName}
              onChange={(e) => handleInput(e)}
            />
          </div>
        </div>
        {/* Last Name Field */}
        <div className="mb-5">
          <div className="flex flex-col">
            <label htmlFor="lastName" className="mb-3 font-medium">
              Last Name:
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="border rounded-lg outline-none focus:border-cyan-500 px-5 py-2 placeholder:text-sm"
              value={formData.lastName}
              onChange={(e) => handleInput(e)}
            />
          </div>
        </div>
        <div className="mb-5">
          <div className="flex flex-col">
            <label htmlFor="phoneNumber" className="mb-3 font-medium">
              Phonenumber:
            </label>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              className="border rounded-lg outline-none focus:border-cyan-500 px-5 py-2 placeholder:text-sm"
              value={formData.phoneNumber}
              onChange={(e) => handleInput(e)}
            />
          </div>
        </div>
        {/* Date of Birth Field */}
        <div className="mb-5">
          <div className="flex flex-col">
            <label htmlFor="dateOfBirth" className="mb-3 font-medium">
              Date of Birth:
            </label>
            <input
              type="date"
              placeholder="Date of Birth"
              name="dateOfBirth"
              className="border rounded-lg outline-none focus:border-cyan-500 px-5 py-2 placeholder:text-sm"
              value={formData.dateOfBirth}
              onChange={(e) => handleInput(e)}
            />
          </div>
        </div>
        {/* Gender Field */}
        <div className="mb-5">
          <div className="flex flex-col">
            <label htmlFor="gender" className="mb-3 font-medium">
              Gender:
            </label>
            <div className="flex items-center">
              <div className="mr-11">
                <input
                  type="radio"
                  name="gender"
                  className="mr-3"
                  value="M"
                  checked={formData.gender === 'M'}
                  onChange={(e) => handleInput(e)}
                />
                <label>Male</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="gender"
                  className="mr-3"
                  value="F"
                  checked={formData.gender === 'F'}
                  onChange={(e) => handleInput(e)}
                />
                <label>Female</label>
              </div>
            </div>
          </div>
        </div>
        {/* End Form */}
        <div className="mb-3">
          <button
            type="submit"
            className="w-full py-3 bg-green-700 cursor-pointer rounded-lg border  border-green-500 uppercase font-semibold">
            {user && 'Update'}
            {!user && 'Add'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
