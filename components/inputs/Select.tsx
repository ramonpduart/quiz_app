import React from 'react'
import styles from './styles.module.css'

interface ISelectProps {
  onChange: (str: string) => void
  label: string
  name: string
  value?: number
  options: Array<IOption>
  error?: boolean
}

interface IOption {
  id: number
  name: string
}

function Select({
  onChange,
  name,
  label,
  value,
  options,
  error = false,
}: ISelectProps) {
  return (
    <div className={styles.container}>
      <label
        htmlFor={name}
        className={error ? styles.label_error : styles.label}
      >
        {label}
      </label>
      <select
        onChange={(event) => onChange(event.target.value)}
        id={name}
        value={value}
        className={error ? styles.input_error : styles.input}
      >
        <option key="0" value="">
          Selecione
        </option>
        {options.map((row: IOption, index: number) => (
          <option key={index} value={row.id}>
            {row.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
