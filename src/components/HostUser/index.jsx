import React from 'react';
import './UserProfile.scss'

const UserProfile = ({ name, picture }) => {
  return (
    <div className='profile-container'>
      <p className='name-user'>{name}</p>
      <img className='photo-user' src={picture} alt="Profile Picture" />
    </div>
  );
};

export default UserProfile;