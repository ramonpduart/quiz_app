import React, { useState } from 'react'
import { useRouter } from 'next/router'

import Head from '../../components/head'
import Button from '../../components/button'
import Input from '../../components/inputs/Input'
import Categories from './Categories'
import styles from './styles.module.css'

interface IStart {
  name: string
  category: number
}

export default function Start() {
  const initial_state: IStart = {
    name: '',
    category: 0,
  }
  const [state, setState] = useState<IStart>(initial_state)
  const [error, setError] = useState<boolean>(false)

  const router = useRouter()

  const validate = () => {
    if (state.name && state.category) {
      router.push(
        `/game?player_name=${state.name}&category_id=${state.category}`
      )
    } else {
      setError(true)
    }
  }

  return (
    <div className={styles.main}>
      <Head />
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
    </div>
  )
}
