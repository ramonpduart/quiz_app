import React from 'react'
import styles from './styles.module.css'

interface InputProps {
  onChange: (str: string) => void
  label: string
  name: string
  value?: string
  error?: boolean
}

function Input({
  onChange,
  name,
  label,
  value = '',
  error = false,
}: InputProps) {
  return (
    <div className={styles.container}>
      <label
        htmlFor={name}
        className={error ? styles.label_error : styles.label}
      >
        {label}
      </label>
      <input
        onChange={(event) => onChange(event.target.value)}
        id={name}
        value={value}
        className={error ? styles.input_error : styles.input}
      />
    </div>
  )
}

export default Input
