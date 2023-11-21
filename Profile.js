import React from 'react';
import profileData from '../public/profile.json';

const Profile = () => {
  const { name, username, bio, followers, following } = profileData;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={profileData.profileImage} alt="Profile" />
        <div className="profile-details">
          <h1>{name}</h1>
          <p>@{username}</p>
          <p>{bio}</p>
        </div>
      </div>

      <div className="profile-stats">
        <div>
          <span>{followers}</span>
          <p>Followers</p>
        </div>
        <div>
          <span>{following}</span>
          <p>Following</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
