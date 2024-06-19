import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 David Ottache. <br /><br />
        All rights reserved. <br /><br />
        davidalogwayeottache@outlook.com
      </p>
    </section>
  );
}

export default Footer;
