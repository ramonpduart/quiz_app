import React, { useEffect, useState } from 'react'
import Select from '../../components/inputs/Select'
import { API } from '../../constants'
import axios from 'axios'

interface IListCategories {
  id: number
  name: string
}

interface ICategory {
  category: number
  setCategory: (e: number) => void
  error: boolean
}

export default function Categories({
  category,
  setCategory,
  error,
}: ICategory) {
  const [listCategories, setListCategories] = useState<Array<IListCategories>>(
    []
  )

  useEffect(() => {
    getCategories()
  }, [])

  function getCategories() {
    axios
      .get(`${API}/categories`)
      .then(({ data }) => {
        setListCategories(data.categories)
      })
      .catch(() => {
        console.log('Ocorreu um erro com a api na busca de categorias.')
      })
  }

  return (
    <Select
      name="categories"
      label="Informe a categoria:"
      value={category}
      onChange={(e: string) => setCategory(parseInt(e))}
      options={listCategories}
      error={error}
    />
  )
}
