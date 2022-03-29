import React from 'react'
import { IProgressAnswers } from '../../models'
import Button from '../button'
import styles from './styles.module.css'

interface IResult {
  resultAnswers: IProgressAnswers
  handleFinish: () => void
}

export default function Result({ resultAnswers, handleFinish }: IResult) {
  const { total_correct_answers, total_questions } = resultAnswers

  function getClassCircleBox(value: number) {
    switch (value) {
      case 0:
        return styles.progress_0
      case 1:
        return styles.progress_1
      case 2:
        return styles.progress_2
      case 3:
        return styles.progress_3
      case 4:
        return styles.progress_4
      case 5:
        return styles.progress_5
      default:
        return styles.progress_0
    }
  }

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>Resultado</h1>

      <div
        className={`${styles.circle_box} ${getClassCircleBox(
          total_correct_answers
        )}`}
      >
        <div>
          <svg className={styles.svg}>
            <circle className={styles.circle} cx="100" cy="100" r="95" />
            <circle className={styles.circle} cx="100" cy="100" r="95" />
          </svg>
          <span>
            {total_correct_answers}/{total_questions}
          </span>
        </div>
      </div>

      <p>
        <span
          className={
            total_correct_answers >= 1 ? styles.star_marked : styles.star
          }
        >
          &#9734;
        </span>
        <span
          className={
            total_correct_answers >= 2 ? styles.star_marked : styles.star
          }
        >
          &#9734;
        </span>
        <span
          className={
            total_correct_answers >= 3 ? styles.star_marked : styles.star
          }
        >
          &#9734;
        </span>
        <span
          className={
            total_correct_answers >= 4 ? styles.star_marked : styles.star
          }
        >
          &#9734;
        </span>
        <span
          className={
            total_correct_answers === 5 ? styles.star_marked : styles.star
          }
        >
          &#9734;
        </span>
      </p>

      <div>
        <Button label="Fim" onClick={handleFinish} disabled={false} />
      </div>
    </div>
  )
}
