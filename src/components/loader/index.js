import React from 'react'

// import { Container } from './styles';
import styles from './styles.module.css'

function Loader() {
  return (
    <div className={styles.container}>
      <div className={styles.lds_grid}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loader
