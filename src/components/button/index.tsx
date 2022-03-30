import React from 'react'

import styles from './styles.module.css'

interface IButtonProps {
  label: string
  disabled: boolean
  onClick: () => void
}

export default function Button({ label, disabled, onClick }: IButtonProps) {
  return (
    <button className={styles.button} disabled={disabled} onClick={onClick}>
      {label}{' '}
    </button>
  )
}
