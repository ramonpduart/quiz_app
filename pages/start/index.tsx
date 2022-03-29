import React, { useState } from 'react'
import Button from '../../components/button'
import Input from '../../components/inputs/Input'
import Categories from './Categories'
import styles from './styles.module.css'

interface IStart {
  name: string
  category: number
}

interface IProps {
  handleStart: (player_name: string, category_id: number) => void
}

export default function Start({ handleStart }: IProps) {
  const initial_state: IStart = {
    name: '',
    category: 0,
  }
  const [state, setState] = useState<IStart>(initial_state)
  const [error, setError] = useState<boolean>(false)

  const validate = () => {
    if (state.name && state.category) {
      handleStart(state.name, state.category)
    } else {
      setError(true)
    }
  }

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>Quiz App</h1>
      </div>
      <div className={styles.row}>
        <Input
          name="name"
          label="Informe seu nome:"
          value={state.name}
          onChange={(e: string) => setState({ ...state, name: e })}
          error={error && !state.name}
        />
      </div>
      <div className={styles.row}>
        <Categories
          category={state.category}
          setCategory={(e: number) => setState({ ...state, category: e })}
          error={error && state.category === 0}
        />
      </div>
      <div className={styles.row}>
        <Button label="Jogar" onClick={validate} disabled={false} />
      </div>
    </div>
  )
}
