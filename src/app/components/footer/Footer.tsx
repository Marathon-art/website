// Footer.tsx
import Link from 'next/link';
import styles from './Footer.module.css'; // Import the CSS module

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.links}>
                <Link href="/about">
                    About
                </Link>
                <Link href="/contact">
                    Contact Us
                </Link>
            </div>
            <div className={styles.copyright}>
                &copy; {new Date().getFullYear()} Your Company Name
            </div>
        </footer>
    );
};

export default Footer;
