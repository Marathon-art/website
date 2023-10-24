import React from 'react';
import styles from './UserInfoDisplay.module.css'; // Import the CSS module

interface UserInfoDisplayProps {
  data: Partial<UserInfo>;
}

interface UserInfo {
  name?: string;
  email?: string;
  id?: string;
  // Add other properties as needed
}


const UserInfoDisplay: React.FC<UserInfoDisplayProps> = ({ data }) => {
  return (
    <div className={styles.userInfoContainer}>
      <h1>Welcome, {data.name || data.email || "Friend"}!</h1>
      <p>Email: {data.email || "N/A"}</p>
      <p>ID: {data.id || "N/A"}</p>
      {/* Display other properties as needed */}
    </div>
  );
};

export default UserInfoDisplay;
