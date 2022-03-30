import React from 'react'
import Head from 'next/head'

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Head>
      <title>Quiz App</title>
      <meta name="description" content="Quiz App - Ramon Duarte" />
      <link rel="icon" href="/icon.ico" />
    </Head>
  )
}

export default Header
