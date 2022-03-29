import React from 'react'
import styles from './styles.module.css'

import { IQuestion, IOption, IProgressAnswers } from '../../models'

interface IQuestionProps {
  key: number
  data: IQuestion
  progressAnswers: IProgressAnswers
  handleSelect: (question_id: number, option_id: number) => void
}

export default function Question({
  key,
  data,
  progressAnswers,
  handleSelect,
}: IQuestionProps) {
  const { id, description, options } = data
  const { total_answered_questions, total_correct_answers, total_questions } =
    progressAnswers

  return (
    <div className={styles.grid}>
      <div className={styles.card_title}>
        <div>
          <span className={styles.title_name}>
            {total_answered_questions + 1}/{total_questions}
          </span>
        </div>
        <div>
          <span className={styles.title_name}>
            Certas: {total_correct_answers}
          </span>
        </div>
      </div>
      <div key={key} className={styles.card}>
        <h1 className={styles.title}>{description}</h1>
        <ul>
          {options.map((row: IOption, index: number) => (
            <li
              key={index}
              value={row.id}
              className={styles.option}
              onClick={() => handleSelect(id, row.id)}
            >
              {row.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
