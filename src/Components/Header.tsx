import styles from './Header.module.css'

import rockerLogo from '../assets/rocket.svg'

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={rockerLogo} alt="Logo" />
      <h1 className={styles.logo}>to<span className={styles.do}>do</span></h1>
    </header>
  )
}
