import React, { useState } from 'react'
import Game from './game/index'
import Start from './start'
import { IPlayer } from '../models'

const MainApp: React.FC = () => {
  const [player, setPlayer] = useState<IPlayer>({
    player_name: '',
    category_id: 0,
  })
  const [mode, setMode] = useState<string>('0')

  const handleStart = (player_name: string, category_id: number) => {
    setPlayer({ player_name, category_id })
    setMode('1')
  }

  const handleFinish = () => {
    setMode('0')
    setPlayer({
      player_name: '',
      category_id: 0,
    })
  }

  if (mode === '0') {
    return <Start handleStart={handleStart} />
  } else {
    return <Game player={player} handleFinish={handleFinish} />
  }
}

export default MainApp
