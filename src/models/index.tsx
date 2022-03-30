export interface IQuestion {
  id: number
  description: string
  options: Array<IOption>
}

export interface IOption {
  id: number
  label: string
}

export interface IProgressAnswers {
  total_answered_questions: number
  total_correct_answers: number
  total_questions: number
}

export interface IPlayer {
  player_name: string
  category_id: number
}
