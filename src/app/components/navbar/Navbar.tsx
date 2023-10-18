// Navbar.tsx
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.links}>
        <Link href="/">
          Home
        </Link>
        <Link href="/registration">
          Registration
        </Link>
        <Link href="/submissions">
          Submissions
        </Link>
        <Link href="/auction">
          Auction
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
