import React from 'react';
import styles from './UserInfoDisplay.module.css'; // Import the CSS module
import Session from '../hooks/session/Session';
import ButtonPrimary from '../components/ButtonPrimary';
import { useLogout } from '../hooks/session/useLogout';

interface UserInfoDisplayProps {
  session: Session;
}

// interface UserInfo {
//   name?: string;
//   email?: string;
//   id?: string;
//   // Add other properties as needed
// }


const UserInfoDisplay: React.FC<UserInfoDisplayProps> = ({ session }) => {
  const { logout } = useLogout();
  return (
    <div className={styles.userInfoContainer}>
      <h1>Welcome, {session.name || "Friend"}!</h1>
      <p>Address: {session.address || "N/A"}</p>
      {/* <p>ID: {data.id || "N/A"}</p>
      <p>data: {JSON.stringify(data) || ''}</p> */}
      {/* Display other properties as needed */}

      <p style={{ paddingTop: '16px' }} />
      <ButtonPrimary
        text="Go to Submissions"
        backgroundColor="#008CBA"
        onClick={() => logout()}
      />
    </div>
  );
};

export default UserInfoDisplay;


// ID: N/A

const data = {
  "appState": "",
  "email": "justdevelopers@gmail.com",
  "aggregateVerifier": "web3auth-google-sapphire",
  "name": "Denis V",
  "profileImage": "https://lh3.googleusercontent.com/a/ACg8ocIuFr1IWxUttjnLnLGJxL-oDmg65wgS_Sds6Br77asX3w=s96-c",
  "typeOfLogin": "google",
  "verifier": "web3auth",
  "verifierId": "justdevelopers@gmail.com",
  "dappShare": "",
  "oAuthIdToken": "",
  "oAuthAccessToken": "",
  "isMfaEnabled": false,
  "idToken": "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlRZT2dnXy01RU9FYmxhWS1WVlJZcVZhREFncHRuZktWNDUzNU1aUEMwdzAifQ.eyJpYXQiOjE2OTgxNDk0NTQsImF1ZCI6IkJPVncxRDBtTFR4UHlWdTdQcXNHNmVfbUROWGY4cU9QSXFidFZiaTJNU2tjbXBQVndId3V5bjBWN2d6UlVFTDdiY0o4MkxndEtlTktqcFV0MFk5WXJURSIsIm5vbmNlIjoiMDNhZjg3ODJkNmU1YWViNDRlYjM1Y2ViNWQ1MGZhZDcxODM5MWQzMWU4ZjZkNTMzYzJjNjUyY2QwMDEyY2VmMzBmIiwiaXNzIjoiaHR0cHM6Ly9hcGktYXV0aC53ZWIzYXV0aC5pbyIsIndhbGxldHMiOlt7InB1YmxpY19rZXkiOiIwMzQ1ODFlODAxYmJkOWFjNGM3Y2IyMjg3NTA1ODhjM2I1MTI5NjMxYWJlNmIwZGQxOWMyODM4ODRiZmM4ZTQ5NjQiLCJ0eXBlIjoid2ViM2F1dGhfYXBwX2tleSIsImN1cnZlIjoic2VjcDI1NmsxIn1dLCJlbWFpbCI6Imp1c3RkZXZlbG9wZXJzQGdtYWlsLmNvbSIsIm5hbWUiOiJEZW5pcyBWIiwicHJvZmlsZUltYWdlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUNnOG9jSXVGcjFJV3hVdHRqbkxuTEdKeEwtb0RtZzY1d2dTX1NkczZCcjc3YXNYM3c9czk2LWMiLCJ2ZXJpZmllciI6IndlYjNhdXRoIiwidmVyaWZpZXJJZCI6Imp1c3RkZXZlbG9wZXJzQGdtYWlsLmNvbSIsImFnZ3JlZ2F0ZVZlcmlmaWVyIjoid2ViM2F1dGgtZ29vZ2xlLXNhcHBoaXJlIiwiZXhwIjoxNjk4MjM1ODU0fQ.3iaPEuDa6IAaySsI_HiOQ4L3zOI8kODXRs3kOTJS9ZqSF0WDOrONZSBV28XN67JOlSoTx2qVzr8krcAuT1pt4w"
}