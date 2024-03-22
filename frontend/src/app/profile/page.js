'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/profile/');

        setProfileData(res.data[0]);
      
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };
  
    fetchProfileData();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {profileData && (
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <div className="bg-white shadow-md rounded-lg p-6 mb-4">
              {/* Display profile image */}
              <img className="w-full h-auto mb-4 rounded-lg" accept="image/png, image/jpeg"  src={profileData.image} alt="User Profile" />
              {/* <h2 className="text-xl font-semibold mb-2">{profileData.user}</h2> */}
              <p className="text-gray-600">Seller</p>
            </div>
          </div>
          <div className="md:w-2/3 md:pl-6">
            <div className="bg-white shadow-md rounded-lg p-6 mb-4">
              <h2 className="text-2xl font-semibold mb-4">About Me</h2>
              <p className="text-gray-600 mb-4">{profileData.bio}</p>
              <p className="text-gray-600">Contact Information:</p>
              <ul className="list-disc list-inside">
                {/* <li>Email: {profileData.email}</li> */}
                <li>Phone: {profileData.phone_number}</li>
                <li>Address: {profileData.address}</li>
              </ul>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Products</h2>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
