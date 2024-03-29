
import styles from '../styles/Home.module.css'

import Image from 'next/image'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h3> Coded by Claire Gao </h3>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    )
}

export default Footer;