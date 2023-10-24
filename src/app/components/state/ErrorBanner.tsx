import React from 'react';
import styles from './ErrorBanner.module.css'; // Import the CSS module

interface ErrorBannerProps {
  error: Error | null;
}

const ErrorBanner: React.FC<ErrorBannerProps> = ({ error }) => {
  const message = error ? error.message : "Oops, something went wrong!";
  return (
    <div className={styles.errorContainer}>
      <p>{message}</p>
    </div>
  );
};

export default ErrorBanner;
