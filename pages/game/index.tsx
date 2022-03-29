import React, { useEffect, useState } from 'react'
import { IQuestion, IProgressAnswers, IPlayer } from '../../models'
import Question from '../../components/question'
import Result from '../../components/result'
import CircularProgress from '../../components/loader'

import { API } from '../../constants'
import axios from 'axios'
import styles from './styles.module.css'

interface IGame {
  player: IPlayer
  handleFinish: () => void
}

interface IState {
  id?: number
  player_id?: number
  questions: Array<IQuestion>
  answers: Array<[]>
}

export default function Game({ player, handleFinish }: IGame) {
  const initial_state: IState = {
    questions: [],
    answers: [],
  }

  const [state, setState] = useState<IState>(initial_state)
  const [progressAnswers, setProgressAnswers] = useState<IProgressAnswers>({
    total_answered_questions: 0,
    total_correct_answers: 0,
    total_questions: 0,
  })
  const [loader, setLoader] = useState<boolean>(true)

  const { id, questions } = state
  const { total_answered_questions, total_questions } = progressAnswers

  useEffect(() => {
    axios
      .post(`${API}/rounds`, {
        round: player,
      })
      .then(({ data }) => {
        setState(data.round)
        setProgressAnswers({
          total_answered_questions: 0,
          total_correct_answers: 0,
          total_questions: data.round.questions.length,
        })
      })
      .catch(() => {
        console.log('Ocorreu um erro ao acessar a api.')
      })
      .finally(() => setLoader(false))
  }, [player])

  const handleSelect = (question_id: number, option_id: number) => {
    setLoader(true)
    axios
      .post(`${API}/rounds/${id}/answers`, {
        answer: {
          question_id,
          option_id,
        },
      })
      .then(({ data }) => {
        setState(
          (state) =>
            (state = {
              ...state,
              answers: [...state.answers, data.answer],
            })
        )
        verifyProgress()
      })
      .catch(() => {
        console.log('Ocorreu um erro ao acessar a api.')
        setLoader(false)
      })
  }

  const verifyProgress = () => {
    axios
      .get(`${API}/rounds/${id}/result`)
      .then(({ data }) => {
        setProgressAnswers({
          total_answered_questions: data.round.total_answered_questions,
          total_correct_answers: data.round.total_correct_answers,
          total_questions: data.round.total_questions,
        })
      })
      .catch(() => {
        console.log('Ocorreu um erro ao acessar a api.')
      })
      .finally(() => setLoader(false))
  }

  if (loader) {
    return <CircularProgress />
  }

  return (
    <div className={styles.container}>
      <div className={styles.container_title}>
        <div>
          <h1 className={styles.title}>Quiz App</h1>
        </div>
        <div>
          <span className={styles.title_name}>Olá {player.player_name}</span>
        </div>
      </div>

      {total_answered_questions < total_questions ? (
        <Question
          key={total_answered_questions}
          data={questions[total_answered_questions]}
          progressAnswers={progressAnswers}
          handleSelect={handleSelect}
        />
      ) : (
        <Result resultAnswers={progressAnswers} handleFinish={handleFinish} />
      )}
    </div>
  )
}
